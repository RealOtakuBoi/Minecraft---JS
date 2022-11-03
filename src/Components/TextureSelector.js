import { useEffect, useState } from "react"
import { UseKeyboard } from "../Hooks/UseKeyboard"
import { useStore } from "../Hooks/useStore"
import { dirtImg, grassImg, glassImg, logImg, woodImg } from '../images/images'

const images = {
	dirt: dirtImg,
	grass: grassImg,
	glass: glassImg,
	wood: woodImg,
	log: logImg,
}

export const TextureSelector = () => {
    const [visible , setVisible] = useState(false)
    const [activeTexture , setActiveTexture] = useStore((state) => [state.texture , state.setTexture])
    const {
		dirt,
		grass,
		glass,
		wood,
		log,
	} = UseKeyboard()


    useEffect(() => {
		const textures = {
			dirt,
			grass,
			glass,
			wood,
			log
		}
        const pressedTexture = Object.entries(textures).find(([k, v]) => v)
		if (pressedTexture) {
            console.log(pressedTexture)
			setActiveTexture(pressedTexture[0])
		}
	}, [ setActiveTexture,dirt, grass, glass, wood, log])



    useEffect(() => {
        const visblityTimeout = setTimeout(() => {
            setVisible(false)
        } , 200)
        setVisible(true)
        return () => {
            clearTimeout(visblityTimeout)
        }
    } , [activeTexture])

    return visible && (
        <div className='absolute centered texture-selector'>
			{Object.entries(images).map(([k, src]) => {
				return (<img
					key={k}
					src={src}
					alt={k}
					className={`${k === activeTexture ? 'active' : ''}`}
				/>)
			})}
		</div>
    )
}