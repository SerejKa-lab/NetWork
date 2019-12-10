import React from 'react'
import preloader from '../../Assets/Images/preloader.svg'


const Preloader = ({ className=null, width='40px', ...styleArg }) => {debugger
    const style = {width, ...styleArg}
    return(
        <img src={preloader} alt='preloader' style={style} className={className} />
    )
}

export default Preloader;