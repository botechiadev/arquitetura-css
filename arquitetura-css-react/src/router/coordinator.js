export function handleAdmin (navigate){
    navigate('/admin')
}

export function handleClub (navigate){
    navigate('/club')
}

export function handleHome (navigate){
    navigate('/')
}

export function handleRecipes (navigate){
    navigate('/recipes')
}


export function handleSignIn (navigate){
    navigate('/sign-in')
}


export function handleSignUp (navigate){
    navigate('/sign-up')
}


export function handleCart(navigate){
    navigate('/cart ')
}
export function handlePurchases(navigate, id){
    navigate(`/purchases/${id}`)
}
