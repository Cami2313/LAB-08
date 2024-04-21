import '../styles/cardStyles.css'

const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png'

const Card = () => {

    const avatar = URL_RANDOM_AVATAR

    const randomIdAvatar = '#' + (Math.floor(Math.random() * 100) + 1)
    
    const descriptions = [
        "Es un avatar colorido con formas geométricas entrelazadas, irradiando energía positiva y creatividad.",
        "Es un avatar minimalista que destaca por su simplicidad elegante, transmitiendo calma y serenidad.",
        "Es un avatar abstracto que evoca la sensación de movimiento y dinamismo, perfecto para personas en constante acción.",
        "Es un avatar con tonos suaves y líneas delicadas, reflejando una personalidad tranquila y contemplativa.",
        "Es un avatar vibrante y lleno de vida, con colores brillantes que expresan alegría y vitalidad.",
        "Es un avatar futurista con un diseño moderno y tecnológico, ideal para aquellos que buscan destacar su espíritu innovador."
    ]
    const randomDescriptionAvatar = descriptions[Math.floor(Math.random() * descriptions.length)]
    
    return (
    <div class="card-container">
        <img src={ avatar } alt="Avatar"/>
        <div class="card-body">
            <h1>{ randomIdAvatar }</h1>
            <p>{ randomDescriptionAvatar }</p>
        </div>
    </div>
  )
}

export default Card
