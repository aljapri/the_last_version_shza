import Image from 'next/image';
import React from 'react'
import './aboutus.css';
import Navbar from '@/components/shared/navbar/Navbar';
export default function page() {
  return (
    <div>
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">شركة شذى الشام</p>
            <p className="text-blk subHeading">
              شذى الشام هي شركة رائدة في صناعة وتوزيع المواد الغذائية، تأسست
              بهدف تقديم منتجات غذائية عالية الجودة تلبي احتياجات وتطلعات
              العملاء. تتخصص الشركة في تقديم مجموعة متنوعة من المنتجات الغذائية
              الطازجة والمعلبة، مع التركيز على النكهة الأصيلة والجودة الممتازة.
              منذ انطلاقتها، حرصت شذى الشام على الالتزام بأعلى معايير الجودة
              والسلامة الغذائية، مما جعلها تحظى بثقة المستهلكين وتقديرهم. تسعى
              الشركة دائماً لتوسيع نطاق منتجاتها وتطويرها لتلبية متطلبات السوق
              المتنامية، مع الحفاظ على الطابع التقليدي والنكهة الأصلية التي تميز
              منتجاتها. تعمل شذى الشام على بناء علاقات طويلة الأمد مع الموردين
              المحليين والدوليين لضمان توفير أفضل المكونات الغذائية. كما تلتزم
              الشركة بالممارسات المستدامة والمسؤولة بيئيًا في جميع عملياتها.
              سواء كنت تبحث عن المكونات الأساسية للطهي اليومي أو المنتجات
              الغذائية المميزة للمناسبات الخاصة، فإن شذى الشام هي الوجهة المثلى
              لتلبية احتياجاتك بمنتجات تجمع بين الجودة والنكهة الأصلية.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            
            <Image
              className="number1img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
              alt="number1img"
              width={200}
              height={200}
            />
            <Image
              className="number2img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
              alt="number1img"
              width={200}
              height={200}
            />
            <Image
              className="number3img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
              alt="number1img"
              width={200}
              height={200}
            />
            <Image
              className="number5img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
              alt="number1img"
              width={200}
              height={200}
            />
            <iframe
              className="number4vid"
              //   poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src="https://www.youtube.com/embed/svg%3E?"
            ></iframe>
            <Image
              className="number7img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"
              alt="number1img"
              width={200}
              height={200}
            />
            <Image
              className="number6img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"
              alt="number1img"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
