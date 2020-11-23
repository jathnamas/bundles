import React from 'react'
import {Carousel, Button} from 'react-bootstrap'

export default class ImageCarousel extends React.Component {
  render() {
    return (
      <div>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/107826013_109999200781994_352860428608376756_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=HBgwZGgf6iIAX9sGEWG&_nc_ht=scontent-ort2-1.xx&oh=c3446406c28c04baa2374a16829df95b&oe=5FDE496C"
              alt="1"
            />
            <Carousel.Caption>
              <Button className="button">See All 41 Photos</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/107695161_109997717448809_8993809700332961842_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=gaqXQt9WpygAX-wfYZV&_nc_ht=scontent-ort2-1.xx&oh=e7e7a763b886253918fe5fb968b771bb&oe=5FE086B4"
              alt="2"
            />
            <Carousel.Caption>
              <Button className="button">See All 41 Photos</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121577682_153666779748569_4951738081693951670_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8bfeb9&_nc_ohc=PIhyEX3O6e4AX9HWqBD&_nc_ht=scontent-ort2-1.xx&oh=bd5b2198c518ae9552f87a997ed06978&oe=5FDD1C36"
              alt="3"
            />
            <Carousel.Caption>
              <Button className="button">See All 41 Photos</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/121723344_153952703053310_8265370201652810140_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=tvHyp8pgK8gAX-UN0VY&_nc_ht=scontent-ort2-1.xx&oh=3c41ff605608531624480a5077df0a93&oe=5FDD846E"
              alt="4"
            />
            <Carousel.Caption>
              <Button className="button">See All 41 Photos</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselPics"
              src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/98188227_10156909587251631_4216905694164549632_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=jzWtoiDWKqIAX-p65b_&_nc_ht=scontent-ort2-1.xx&oh=593eefa0da7dcb367ad66f3b84db741e&oe=5FDDE279"
              alt="5"
            />
            <Carousel.Caption>
              <Button className="button">See All 41 Photos</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}
