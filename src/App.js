import React from 'react';
import './App.css';
import Heder from './Heder';

class profile extends React.Component{
  render(){
    return(
      <div className='all'>
        
      <div className='info'>
          <i class="fa fa-cloud"></i>
          <a>trantronghung9112003@gmail.com</a>
          <i class="fa fa-heart"></i>
          <a>0364491279</a>
          <i class="fa fa-car"></i>
          <a>259 Hà Huy Tập</a>
      </div>

      <div className='thongtin'>
          <div className='tt1'>
            <h2>MỤC TIÊU NGHỀ NGHIỆP</h2>       
            <p>Mong muốn trở thành một PM lead team 10 nhân sự để nâng cấp các sản phẩm chạy nhanh và ổn định hơn cho công ty .
              Ngoài ra , tôi còn mong muốn được làm trong một môi trường chuyên nghiệp , đồng nghiệp hòa đổng phúc lợi tốt  </p>     
          </div>
          <div className='kynang'>
            <h2>Kỹ Năng     </h2>
            <h5> NodeJS       <a className='a11'> </a> <a className='b11'> </a> </h5>
            <h5> VueJS        <a className='a12'></a> <a className='b12'></a></h5>
            <h5> PHP          <a className='a13'> </a> <a className='b13'></a> </h5>
            <h5> Tiếng Anh    <a className='a14'>  </a> <a className='b14'> </a></h5>
          </div>
      
          <div className='cc'>
              <h2>Chứng Chỉ </h2>
              <h5>- PHP, JAVASCRIP, MYSQL</h5>
              <h5>- LARAVEL FRAMEWORK, JQUERY, REACT</h5>
              <h5>- GIT, LINUX, REDIS, MONGOB</h5>

          </div>

          <div className='hv'>
              <h2>HỌC VẤN </h2>
              <h3>Chuyên Ngành Công Nghệ Tông Tin </h3>
              <h4>Cao Đẳng FPT poly</h4>
              <h5>Tốt NGhiệp Loại Giỏi, Điểm Trung Bình 8.0</h5>
          </div>

          <div className='knlv'>
              <h2>Kinh Nghiệm Làm Việc </h2>
              <h3>SENIOR DEVELOPER </h3>
              <h4>Công Ty Công Nghệ B</h4>
              <h5>Thực hiện các dự án PHP</h5>
          </div>

          <div className='hd'>
              <h2>Hoạt Động  </h2>
              <h3>Thành Viên </h3>
              <h4>Tham Gia Học Tại Trường FPT POLY</h4>
              <h5>Cùng Team Đạt Giải</h5>
          </div>

          <div className='ctcn'>
              <h2>JUNIOR DEVELOPER  </h2>
              <h3>Công Ty Công Nghệ B</h3>             
              <h5>Thực hiện các dự án big data </h5>
          </div>

          <div className='gt'>
              <h2>Giải Thưởng   </h2>
              <h3>Nhân Viên Xuất Sắc Nhắt Công Ty FPOLY </h3>
              
          </div>

          <div className='st'>
              <h2>Sở Thích    </h2>
              <ul>
                <li> Chơi Game </li>
                <li> Đi Chơi  </li>
                <li> Xem Phim  </li>              
              </ul>
              
          </div>



      </div>    
    </div>
    )
  }


}

function App() {
  return (
    <div className='all'>
      <link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="dau">
        <div className="img">
          <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eaf6e5daa8a7286785abb28fc52ee801~c5_100x100.jpeg?x-expires=1673053200&x-signature=5TZUGo41zKdmsg91rWe0oC%2F9%2F0M%3D'></img>
        </div>
        <div className='text1'>
            <text>
                <h1> Trần Trọng Hùng </h1>
                <h4>Lập Trình Viên Java</h4>     
            </text>
        </div>

      </div>
 
      <div className='info'>
          <i class="fa fa-cloud"></i>
          <a>trantronghung9112003@gmail.com</a>
          <i class="fa fa-heart"></i>
          <a>0364491279</a>
          <i class="fa fa-car"></i>
          <a>259 Hà Huy Tập</a>
      </div>

      <div className='thongtin'>
          <div className='tt1'>
            <h2>MỤC TIÊU NGHỀ NGHIỆP</h2>       
            <p>Mong muốn trở thành một PM lead team 10 nhân sự để nâng cấp các sản phẩm chạy nhanh và ổn định hơn cho công ty .
              Ngoài ra , tôi còn mong muốn được làm trong một môi trường chuyên nghiệp , đồng nghiệp hòa đổng phúc lợi tốt  </p>     
          </div>
          <div className='kynang'>
            <h2>Kỹ Năng     </h2>
            <h5> NodeJS       <a className='a11'> </a> <a className='b11'> </a> </h5>
            <h5> VueJS        <a className='a12'></a> <a className='b12'></a></h5>
            <h5> PHP          <a className='a13'> </a> <a className='b13'></a> </h5>
            <h5> Tiếng Anh    <a className='a14'>  </a> <a className='b14'> </a></h5>
          </div>
      
          <div className='cc'>
              <h2>Chứng Chỉ </h2>
              <h5>- PHP, JAVASCRIP, MYSQL</h5>
              <h5>- LARAVEL FRAMEWORK, JQUERY, REACT</h5>
              <h5>- GIT, LINUX, REDIS, MONGOB</h5>

          </div>

          <div className='hv'>
              <h2>HỌC VẤN </h2>
              <h3>Chuyên Ngành Công Nghệ Tông Tin </h3>
              <h4>Cao Đẳng FPT poly</h4>
              <h5>Tốt NGhiệp Loại Giỏi, Điểm Trung Bình 8.0</h5>
          </div>

          <div className='knlv'>
              <h2>Kinh Nghiệm Làm Việc </h2>
              <h3>SENIOR DEVELOPER </h3>
              <h4>Công Ty Công Nghệ B</h4>
              <h5>Thực hiện các dự án PHP</h5>
          </div>

          <div className='hd'>
              <h2>Hoạt Động  </h2>
              <h3>Thành Viên </h3>
              <h4>Tham Gia Học Tại Trường FPT POLY</h4>
              <h5>Cùng Team Đạt Giải</h5>
          </div>

          <div className='ctcn'>
              <h2>JUNIOR DEVELOPER  </h2>
              <h3>Công Ty Công Nghệ B</h3>             
              <h5>Thực hiện các dự án big data </h5>
          </div>

          <div className='gt'>
              <h2>Giải Thưởng   </h2>
              <h3>Nhân Viên Xuất Sắc Nhắt Công Ty FPOLY </h3>
              
          </div>

          <div className='st'>
              <h2>Sở Thích    </h2>
              <ul>
                <li> Chơi Game </li>
                <li> Đi Chơi  </li>
                <li> Xem Phim  </li>              
              </ul>
              
          </div>



      </div>    
    </div>
  );
}

export default App;
