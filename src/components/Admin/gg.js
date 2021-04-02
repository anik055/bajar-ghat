import React, { useState } from 'react';
import './admin.css';
import manage from '../../images/icons/grid.png'
import add from '../../images/icons/plus.png'
import edit from '../../images/icons/edit.png'

const Admin = () => {
    let [display, setDisplay] = useState([]);
    const displayManage = () => {
        setDisplay = 'manage';
        console.log('manage');
    }
    const displayAdd = () => {
        setDisplay = 'add';
        console.log(display);
    }
    const displayEdit = () => {
        setDisplay = 'display';
        console.log(display);
    }
    console.log(display);
    
    return (
        <div>
            <div id="viewport">
  <div id="sidebar">
    <header>
      <a  href="#">FRESH VALLEY</a>
    </header>
    <ul class="nav">
      <li >
        <a onClick={displayManage}  href="#">
        <img src={manage} alt=""/>
           Manage Product
        </a>
      </li>
      <li>
        <a onClick={displayAdd} href="#">
        <img src={add} alt=""/>
           Add Product
        </a>
      </li>
      <li>
        <a onClick={displayEdit} href="#"> <img src={edit} alt=""/> Edit Product</a>
      </li>
    </ul>
  </div>

  <div id="content">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          
          <li><a href="#">Test User</a></li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <h1>Simple Sidebar</h1>
      <p>
        Make sure to keep all page content within the 
        <code>#content</code>.
      </p>
    </div>
  </div>
  <div id="conten">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
          
          <li><a href="#">Test User</a></li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <h1>{display}</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum, perferendis excepturi unde nulla quas veritatis! Nobis odio amet eum aliquid quod id ad nihil! Expedita fugit velit aut eius dolore corporis totam, ad ratione dolorum? Debitis facere quidem cupiditate provident consectetur tempore, deleniti a voluptas! Totam adipisci mollitia at soluta et, omnis suscipit quidem minima commodi quibusdam quasi nisi quaerat est voluptates. Inventore ratione laudantium, amet eligendi dolores quod, perferendis veniam quis, hic architecto non facilis molestias at! Fuga harum nostrum assumenda quaerat quos, facere saepe magnam hic voluptates eius culpa! Maiores impedit quibusdam facilis est quasi voluptatem cupiditate. Temporibus in aliquid quas, harum repellendus eius esse non sint culpa rerum iusto accusantium omnis suscipit dolore, perspiciatis nihil aliquam? Ipsam sequi voluptatibus dolor maiores sunt nihil soluta, similique dicta repellat reiciendis delectus vero cupiditate beatae ut eum quas officia pariatur fuga dolorem et culpa enim tempora deleniti ea? Eius ipsam culpa neque illum, reiciendis, nesciunt perspiciatis nulla consectetur provident ad laboriosam minus obcaecati iste aliquam beatae voluptatem officiis cum exercitationem, qui rerum ipsum laborum ratione soluta voluptatum! Quibusdam dolores tempore ipsa voluptate iure dolorum debitis dolor unde nam similique numquam tenetur ut, aperiam earum labore consectetur repudiandae explicabo sequi! Porro quo eveniet dolorum officiis. Voluptatum pariatur culpa delectus error sapiente, beatae labore, consectetur laborum quis eos maiores suscipit molestias accusantium sunt quisquam. Molestias amet tempora, exercitationem fuga atque minima ullam iste, quibusdam consectetur laboriosam inventore officia cumque culpa soluta laudantium dolor at corrupti? Nulla facilis unde mollitia explicabo aliquid culpa vel, sint veniam ut quae soluta sapiente sequi deleniti tenetur. Repellendus cupiditate possimus culpa ratione magni eaque. Commodi nemo ad ratione est, dolor quae dolore pariatur itaque doloremque deserunt. Repudiandae atque, quidem laboriosam, architecto, quasi veniam asperiores maxime voluptatum aperiam maiores amet accusamus nihil necessitatibus omnis hic possimus id.
        Make sure to keep all page content within the 
        <code>#content</code>.
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Admin;