"use client"

import { useState } from "react"
import Image from "next/image"
import Rug from "../assets/rugged.png"
import Jeet from "../assets/jeet.png"
import Locked from "../assets/locked.png"

const Slider = () => {

    const [images, setImages] = useState([Rug, Jeet, Locked])
    const [currentIndex, setCurrentIndex] = useState(0)

    const moveForward = () => {
        const next = currentIndex + 1
        if (images[next] === undefined) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const moveBack = () => {
        const next = currentIndex - 1
        if (images[next] === undefined) {
            setCurrentIndex(images.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

  return (
    <div className="flex">
        <button className="text-5xl text-white" onClick={moveBack}>&lt;</button>
        <Image className="object-cover w-[20vw] h-[40vh] mobile:w-[70vw]" src={images[currentIndex]} alt="" />
        <button className="text-5xl text-white" onClick={moveForward}>&gt;</button>
    </div>
  )
}

export default Slider