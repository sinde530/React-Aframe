import React from 'react'
import 'aframe';
import {
    Box,
    Sphere,
    Cylinder,
    Plane,
    Sky,
    Text,
    Scene,
    Image,
    Entity
} from 'react-aframe-ar';

export default class WebImage extends React.Component {
    // static Assets = [
    //     <img id="Img1"
    //         src="https://tipsmake.com/data1/images/how-to-extract-img-files-in-windows-10-picture-1-GbDqa6QN9.jpg"
    //         alt='img1'
    //     />
    // ]

    render() {
        return (
            <div>
                <Scene>
                    <Box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow />
                    {/* <Image position="2 2.5 -2" src="#Img1" /> */}
                    <Image
                        position="0 3 -6"
                        rotation="14 0 0"
                        width="5"
                        height="5"
                        src="https://tipsmake.com/data1/images/how-to-extract-img-files-in-windows-10-picture-1-GbDqa6QN9.jpg"
                    />
                    <Plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4" shadow />
                    <Sky color="#ECECEC" />
                </Scene>
            </div>
        )
    }
}

