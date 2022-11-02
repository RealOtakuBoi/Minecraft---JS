import {dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,} from './images'

import { NearestFilter, TextureLoader } from 'three'

const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter


export {
    dirtTexture,
    grassTexture,
    woodTexture,
    logTexture,
    groundTexture,
    glassTexture
}


