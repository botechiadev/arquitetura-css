import styled from 'styled-components'


export const BannerContainer = styled.div`
.banner {
  position: relative;
}
.banner__titulo {
  color: #fdfdfd;
  font-family: Pacifico, cursive;
  font-size: 5.0625rem;
  position: absolute;
  left: 50%;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.75);
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;
}
.banner__imagem {
  background: url('src/assets/img/banner.jpg') no-repeat center / cover;
  height: calc(100vh - 72px);
  width: 100%;
}


`