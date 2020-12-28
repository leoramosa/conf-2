import React, { useContext }from 'react'
import  AppContext   from '../../context/AppContext';
import './styles/styleSerOne.css'
import imgDetail1 from "../../images/detalle-ser-4.jpg";
import imgDetail2 from "../../images/detalle-ser-4-2.jpg";
import Photos from '../../components/Photos';

const ServiceThree= () => {
  const {state} = useContext(AppContext)
  const { products , productEnable} = state;


  return (
    <>
      <div className="content_service-detail">
        <div className="header-product-1">
          <div className="header-content">
            <div className="overlay">
                <div className="content-title">
                    <p>
                      {products[0].name}
                    </p>
                </div>
              </div>
          </div>
        </div>
        
          
          <div className="content-service">
            <div className="info-parrafo">
            <p className="information">
              Contamos con dos tipos de escencias florales. Estan desarrolladas para ayudarnos a sanar desde el alma y no desde el cuerpo fisico.
              <br/><br/>
              Estos remedios naturales nos da cada gota de amor, armonia y tranquilidad que nos brindan estas flores magicas sanadoras.
              </p>
              <div className="content-product">
             
              <div className="lista-tres">
              <div className="img-product">
                <img src={productEnable[0].image} alt=""/>
              </div>
              <div className="info-product">
               <b> {productEnable[0].name}  </b>
              <br/><br/>
              Son escencias extraidas de la naturaleza que ayudan a tratar distintos tipos de situaciones emcionales, como; depresion, angustia, estres, miedos, obsesiones, soledad, etc.

              </div>
                
              </div>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Contenido: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{productEnable[0].contenido} </p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{productEnable[0].price}</p>
                    </div>
                  </div>
                </div>
                <div className="content-pay">
                  <div className="columnTwo">
                  <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>Medio de pago: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago"><i className="fab fa-cc-paypal"></i><i className="fas fa-random"></i></p>
                      <p className="pago">Paypal o Transferencia</p>
                    </div>
                  </div>
                  <div className="columnTwo">
                  <div className="sale-button-product">
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${productEnable[0].mensaje}`} rel="noopener noreferrer" target="_blank">
                    <button type="button">
                    <i className="fab fa-whatsapp"></i> {productEnable[0].buttontype}
                    </button>
                    </a>
                </div>
                  </div>
                </div>


              </div>
              </div>
              <div className="content-product">
              <div className="lista-tres">
              <div className="img-product">
                <Photos/>
              </div>
              <div className="info-product">
               <b>{productEnable[1].name} </b>
              <br/><br/>
              Estas escencias nos permiten elevar nuestra vibracion, restablecer nuestro cuerpo fisico y emocional. Nos ayuda a seguir el camino evolutivo espiritual y tener mayor contacto con nuestra alma desde el amor y la gratitud. 
            <br/><br/>
            Es un sistema de sanacion de luz, complementan terapias y nos ayudan a mantenernos alineados.
            <br/><br/>
            Elaboradas desde lo mas sagrado de la madre naturaleza, son elaboradas bajo un sistema artesanal.
            <br/><br/>
            Prepara nuestro cuerpo de luz para recibir la luz de dimensiones superiores, promueve nuestra conexión espiritual y estimula los sueños. Se utiliza como acompañamiento a terapias holisticas y tambien en caso de traumas, insomnio cronico, accidentes o cualquier tipo de desconexión espiritual.
              </div>
                
              </div>
              <div className="content-payment">
                <div className="content-pay">
                  <div className="columnOne">
                    <div className="name-column">
                     
                      <p>Contenido: </p>
                    </div>
                    <div className="icon-column">
                     
                      <p>{productEnable[1].contenido} </p>
                    </div>
                  </div>
                  <div className="columnOne">
                      <div className="name-column">
                    
                      <p>Precio: </p>
                    </div>
                    <div className="icon-column">
                      
                      <p>{productEnable[1].price}</p>
                    </div>
                  </div>
                </div>
                <div className="content-pay">
                  <div className="columnTwo">
                  <div className="name-column">
                    <p><i className="">&nbsp;</i></p>
                    <p>Medio de pago: </p>
                    </div>
                    <div className="icon-column">
                      <p className="i-pago"><i className="fab fa-cc-paypal"></i><i className="fas fa-random"></i></p>
                      <p className="pago">Paypal o Transferencia</p>
                    </div>
                  </div>
                  <div className="columnTwo">
                  <div className="sale-button-product">
                <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${productEnable[1].mensaje}`} rel="noopener noreferrer" target="_blank">
                    <button type="button">
                    <i className="fab fa-whatsapp"></i> {productEnable[1].buttontype}
                    </button>
                    </a>
                </div>
                  </div>
                </div>


              </div>
              </div>
            </div>
            <div className="info-images">
              <div className="img">
                <img src={imgDetail1} alt=""/>
              </div>
              <div className="img">
                <img src={imgDetail2} alt=""/>
              </div>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default ServiceThree;
