import { BannerContainer } from './styled.Banner'

export default function Banner({children}) {
  return (
    <BannerContainer>
      <section className="banner">
            <div className="banner__imagem"></div>
            <h2 className="banner__titulo">
              {children}
            </h2>
        </section>
    </BannerContainer>
  )
}
