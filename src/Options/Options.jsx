import html2canvas from 'html2canvas';
import { useState } from 'react';
import { useEffect } from 'react';

function Options() {

    useEffect(() => {
        addPumpkin(startingPumpkin)
    }, []);

    const startingPumpkin = "Orange_Simple.png"

    const [isEditing, setIsEditing] = useState(0);
    const [currentShape, setCurrentShape] = useState('')
    const [currentColor, setCurrentColor] = useState('')

    const changeEditing = (num) => {
      setIsEditing(num);
      console.log(num);
    }

    const handleDownload = async () => {
        const element = document.getElementById('canvas'),
        canvas = await html2canvas(element),
        data = canvas.toDataURL('image/jpg'),
        link = document.createElement('a');
     
        link.href = data;
        link.download = 'downloaded-image.jpg';
     
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
      const addPumpkin = (pumpkin) => {
        const element = document.getElementById('canvas')
        for ( const child of element.children ){
          console.log(child);
          if (child.classList.contains('pumpkin')) {
            element.removeChild(child)
          }
        }

        setCurrentShape(pumpkin.substring(pumpkin.indexOf('_') + 1))
        setCurrentColor(pumpkin.substring(0, pumpkin.indexOf('_')))
    
        console.log(pumpkin);
        const node = document.createElement("img");
        node.src = process.env.PUBLIC_URL + '/Images/' + pumpkin
    
        node.classList.add("pumpkin")
        document.getElementById('canvas').appendChild(node)
    
      }
    
      const addEyes = (event) => {
        if (event.target.value === 'none') {
    
        } else {
        const element = document.getElementById('canvas')
        for ( const child of element.children ){
          console.log(child);
          if (child.classList.contains('eyes')) {
            element.removeChild(child)
          }
        }
    
        console.log(event.target.value);
        const node = document.createElement("img");
        node.src = process.env.PUBLIC_URL + '/Images/' + event.target.value
    
        node.classList.add("eyes")
        document.getElementById('canvas').appendChild(node)
    
      }
      }

    if (isEditing === 0) {
    return(

            //     <select onChange={(event) => addPumpkin(event)}>
            //     <option value="none">select a pumpkin</option>
            //     <option value="Black_Fat.png">Wide Black Pumpkin</option>
            //     <option value="Green_Fat.png">Wide Green Pumpkin</option>
            //     <option value="Pink_Fat.png">Wide Pink Pumpkin</option>
            //     <option value="Orange_Fat.png">Wide Orange Pumpkin</option>
            //     <option value="Black_Pear.png">Gord Black Pumpkin</option>
            //     <option value="Green_Pear.png">Gord Green Pumpkin</option>
            //     <option value="Pink_Pear.png">Gord Pink Pumpkin</option>
            //     <option value="Orange_Pear.png">Gord Orange Pumpkin</option>
            //     <option value="Black_Simple.png">Simple Black Pumpkin</option>
            //     <option value="Green_Simple.png">Simple Green Pumpkin</option>
            //     <option value="Pink_Simple.png">Simple Pink Pumpkin</option>
            //     <option value="Orange_Simple.png">Simple Orange Pumpkin</option>
            //     <option value="Black_Tall.png">Tall Black Pumpkin</option>
            //     <option value="Green_Tall.png">Tall Green Pumpkin</option>
            //     <option value="Pink_Tall.png">Tall Pink Pumpkin</option>
            //     <option value="Orange_Tall.png">Tall Orange Pumpkin</option>
            //   </select>
            //   <select onChange={(event) => addEyes(event)}>
            //     <option value="none">select the Eyes</option>
            //     <option value="Traditional.png">Traditional Eyes</option>
            //     <option value="angry.png">Angry Eyes</option>
            //     <option value="cartoon.png">Cartoon Eyes</option>
            //     <option value="Circle.png">Circle Eyes</option>
            //   </select>
            //   <button onClick={() => handleDownload()}>
            //     Export As PNG
            //   </button>
        <div className='options-container'>
        <div className='options-zone'>
          <div className='shape-option option-button' onClick={() => changeEditing(1)}>
            <img src={process.env.PUBLIC_URL + '/Images/Shape.png'} alt="" />
          </div>
          <div className='color-option option-button' onClick={() => changeEditing(2)}>
              <img src={process.env.PUBLIC_URL + '/Images/Color.png'} alt="" />
          </div>
          <div className='eyes-option option-button' onClick={() => changeEditing(3)}>
            <img src={process.env.PUBLIC_URL + '/Images/Eyes.png'} alt="" />
          </div>
          <div className='nose-option option-button' onClick={() => changeEditing(4)}>
            <img src={process.env.PUBLIC_URL + '/Images/Nose.png'} alt="" />
          </div>
          <div className='mouth-option option-button' onClick={() => changeEditing(5)}>
            <img src={process.env.PUBLIC_URL + '/Images/Mouth.png'} alt="" />
          </div>
          <div className='save-option option-button' onClick={() => handleDownload()}>
            <img src={process.env.PUBLIC_URL + '/Images/Save.png'} alt="" />
          </div>
        </div>
      </div>
    )
    } else if (isEditing === 1) {
        return (
            <div className='options-container'>
            <div className='options-zone'>
              <div className='shape-option option-button' onClick={() => addPumpkin(currentColor + "_Simple.png")}>
                <img src={process.env.PUBLIC_URL + '/Images/Perfect.png'} alt="" />
              </div>
              <div className='color-option option-button' onClick={() => addPumpkin(currentColor + "_Tall.png")}>
                  <img src={process.env.PUBLIC_URL + '/Images/Tall.png'} alt="" />
              </div>
              <div className='eyes-option option-button' onClick={() => addPumpkin(currentColor + "_Fat.png")}>
                <img src={process.env.PUBLIC_URL + '/Images/Fat.png'} alt="" />
              </div>
              <div className='nose-option option-button' onClick={() => addPumpkin(currentColor + "_Pear.png")}>
                <img src={process.env.PUBLIC_URL + '/Images/Gourd.png'} alt="" />
              </div>
              <div className='nose-option option-button' onClick={() => changeEditing(0)}>
                <p>back</p>
              </div>
            </div>
          </div>
        ) 
    } else if (isEditing === 2) {
        return (
            <div className='options-container'>
            <div className='options-zone'>
              <div className='option-button' onClick={() => addPumpkin("Orange_" + currentShape)}>
                <img src={process.env.PUBLIC_URL + '/Images/Orange.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addPumpkin("Pink_" + currentShape)}>
                  <img src={process.env.PUBLIC_URL + '/Images/Pink.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addPumpkin("Green_" + currentShape)}>
                <img src={process.env.PUBLIC_URL + '/Images/Green.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addPumpkin("Black_" + currentShape)}>
                <img src={process.env.PUBLIC_URL + '/Images/Black.png'} alt="" />
              </div>
              <div className='nose-option option-button' onClick={() => changeEditing(0)}>
                <p>back</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Options;