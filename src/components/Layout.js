import React from 'react'

const Layout = ({children, className=''}) => {
    return (
        <div className={`${className} w-full h-full inline-block p-32 z-0`}>
            {children}
        </div>
    )
}

export default Layout