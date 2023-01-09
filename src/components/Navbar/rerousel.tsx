import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Slide(){

    const handleDragStart = (e: any) => e.preventDefault();

    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        1024: {
            items: 3, 
            itemsFit: 'contain'
        },
    };

    const images = [
        <img style={{ width: "20vh", height: "20vh" }} src="https://is3-ssl.mzstatic.com/image/thumb/Purple112/v4/02/65/11/026511bd-43f0-930a-0748-179fba32a70f/AppIcon-1x_U007emarketing-0-10-0-85-220.png/256x256bb.jpg" onDragStart={handleDragStart} alt="" />,
        <img style={{ width: "20vh", height: "20vh" }} src="https://ps.w.org/ethereumico/assets/icon-256x256.png?rev=1793357" onDragStart={handleDragStart} alt="" />,
        <img style={{ width: "20vh", height: "20vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaWdcMNdg7DPYUj3usnh9v7mk_5nPKBJmLdE5JwJIyB5pIR4XsIboqU7dq5uTXgZKPC8g&usqp=CAU" onDragStart={handleDragStart} alt="" />,
        <img style={{ width: "20vh", height: "20vh" }} src="https://trufflesuite.com/img/docs/truffle/truffle-with-metamask/metamask.png" onDragStart={handleDragStart} alt="" />,
        <img style={{ width: "20vh", height: "20vh" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xhDjMC091DhAHYiPEat25QM4S8eGOXo9Uum_X6F4hA_edUhAGxeqszu8S_ZUbJ1LKKY&usqp=CAU" onDragStart={handleDragStart} alt="" />,
    ];

    const items = images.map((item, index) => {
        const style = { width: "30vh" };
        return (<div className="item" style={style}>{item}</div>);
    });
  
    return (
        <>
            <AliceCarousel
                autoWidth
                autoHeight
                mouseTracking
                items={items}
                paddingLeft={0}
                paddingRight={0}
                responsive={responsive}
            />
        </>
    );
};