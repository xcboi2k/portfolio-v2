import React from 'react'

const Layout = ({children, className='', footer=false}) => {
    return (
        <div
            className={`${className} w-full h-full inline-block z-0 ${footer ? 'p-3' : 'p-6 sm:p-12 md:p-20 lg:p-32'}`}
        >
            {children}
        </div>
    )
}

export default Layout