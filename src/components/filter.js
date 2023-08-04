import * as React from "react"

const FilterSvg = () => {
    return (
        <svg>
            <filter id='roughpaper'>
                <feTurbulence type="fractalNoise" baseFrequency='0.04' result='noise' numOctaves="5" />
                <feDiffuseLighting in='noise' lighting-color='#F9F9ED' surfaceScale='3'>
                    <feDistantLight azimuth = '100' elevation='100' />
                </feDiffuseLighting>
            </filter>
        </svg>
    )
}

export default FilterSvg