import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

const DataCertificate = [
  {
    title: " PHP , JAVASCRIPT , MYSQL ,FULLSTACK",
  },
  {
    title: " LARAVEL FRAMEWORK , JQUERY , REACT",
  },
  {
    title: " GIT , LINUX , REDIS, MONGOB",
  },
];

function App() {
  const [Input, setInput] = useState(300);
  const dataSkill = [
    {
      name: "NodeJs",
      typeOne: "a11",
      input: 30,
      id: 1,
    },
    {
      name: "VueJs",
      typeOne: "a12",
      input: 50,
      id: 2,
    },
    {
      name: "PHP",
      typeOne: "a13",
      input: 300,
      id: 3,
    },
    {
      name: "Tiếng Anh",
      typeOne: "a14",
      input: 189,
      id: 4,
    },
  ];
  const [skill, setSkill] = useState(dataSkill || []);
  const [chungchi, setchungchi] = useState(DataCertificate || []);

  return (
    <div className="all">
      <Header
        author={"Trần Trọng Hùng "}
        address={"259 Hà Huy tập"}
        email={"trantronghung@gmail.com"}
        phoneNumber={"03993784848"}
        job={"Lập trình viên Java"}
      />
      {/* form model */}
      {/* view element */}
      <div className="thongtin">
        <div className="tt1">
          <h2>MỤC TIÊU NGHỀ NGHIỆP</h2>
          <p>
            Mong muốn trở thành một PM lead team 10 nhân sự để nâng cấp các sản
            phẩm chạy nhanh và ổn định hơn cho công ty . Ngoài ra , tôi còn mong
            muốn được làm trong một môi trường chuyên nghiệp , đồng nghiệp hòa
            đổng phúc lợi tốt
          </p>
        </div>

        <div className="kynang">
          <h2>Kỹ Năng</h2>
          <button
          className="absolute mt-[180px] ml-[530px] bg-red-700 px-4 "
            onClick={() => {
              setInput((e) => e + 5);
            }}
          >
            add
          </button>
        

          {skill.map((e, i) => {
            return (
              <h5 key={i}>
                {e.name}
                <a
                  href="#/"
                  Style={`width: ${e.input}px`}
                  className={e.typeOne}
                ></a>
                <a href="#/" className="b11"></a>
              </h5>
            );
          })}
           <h5 className="">
            {'fullStack'}
            <a href="#/" Style={`width: ${Input}px`} className={"a17"}></a>
            <a href="#/" className="b11"></a>
          </h5>
        </div>
        <div className="cc">
          <h2>Chứng Chỉ </h2>
          {chungchi.map((e, i) => {
            return <h5 key={i}>{e.title}</h5>;
          })}
        </div>
        <div className="hv">
          <h2>HỌC VẤN </h2>
          <h3>Chuyên Ngành Công Nghệ Tông Tin </h3>
          <h4>Cao Đẳng FPT poly</h4>
          <h5>Tốt NGhiệp Loại Giỏi, Điểm Trung Bình 8.0</h5>
        </div>
        <div className="knlv">
          <h2>Kinh Nghiệm Làm Việc </h2>
          <h3>SENIOR DEVELOPER </h3>
          <h4>Công Ty Công Nghệ B</h4>
          <h5>Thực hiện các dự án PHP</h5>
        </div>
        <div className="hd">
          <h2>Hoạt Động </h2>
          <h3>Thành Viên </h3>
          <h4>Tham Gia Học Tại Trường FPT POLY</h4>
          <h5>Cùng Team Đạt Giải</h5>
        </div>
        <div className="ctcn">
          <h2>JUNIOR DEVELOPER </h2>
          <h3>Công Ty Công Nghệ B</h3>
          <h5>Thực hiện các dự án big data </h5>
        </div>
        <div className="gt">
          <h2>Giải Thưởng </h2>
          <h3>Nhân Viên Xuất Sắc Nhắt Công Ty FPOLY </h3>
        </div>
        <div className="st">
          <h2>Sở Thích </h2>
          <ul>
            <li> Chơi Game </li>
            <li> Đi Chơi </li>
            <li> Xem Phim </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
