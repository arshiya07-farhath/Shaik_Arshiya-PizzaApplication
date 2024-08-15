import {Component} from 'react';


class Contact extends Component{
    render(){
        return(
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://th.bing.com/th/id/OIP.ZIvNb9xi9w3jjc0Us06owAHaEK?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." width="800px" height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.createwebquest.com/sites/default/files/images/pizza1.png" class="d-block w-100" alt="..." width="700px" height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/E7kbUCBZpvU/maxresdefault.jpg" class="d-block w-100" alt="..." width="700px" height="500px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  
</div>
        )
    }
}

export default Contact;