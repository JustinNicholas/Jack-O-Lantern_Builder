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
    
      const addEyes = (eyes) => {
        const element = document.getElementById('canvas')
        for ( const child of element.children ){
          console.log(child);
          if (child.classList.contains('eyes')) {
            element.removeChild(child)
          }
        }
    
        console.log(eyes);
        const node = document.createElement("img");
        node.src = process.env.PUBLIC_URL + '/Images/' + eyes
    
        node.classList.add("eyes")
        document.getElementById('canvas').appendChild(node)
      }

      const addNose = (nose) => {
        const element = document.getElementById('canvas')
        for ( const child of element.children ){
          console.log(child);
          if (child.classList.contains('nose')) {
            element.removeChild(child)
          }
        }
    
        console.log(nose);
        const node = document.createElement("img");
        node.src = process.env.PUBLIC_URL + '/Images/' + nose
    
        node.classList.add("nose")
        document.getElementById('canvas').appendChild(node)
      }

      const addMouth = (mouth) => {
        const element = document.getElementById('canvas')
        for ( const child of element.children ){
          console.log(child);
          if (child.classList.contains('mouth')) {
            element.removeChild(child)
          }
        }
    
        console.log(mouth);
        const node = document.createElement("img");
        node.src = process.env.PUBLIC_URL + '/Images/' + mouth
    
        node.classList.add("mouth")
        document.getElementById('canvas').appendChild(node)
      }

    if (isEditing === 0) {
    return(
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
            <div className='pumpkin-options-zone'>
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
              <div className='option-button' onClick={() => changeEditing(0)}>
                <p className='no-margin'>Back</p>
              </div>
            </div>
          </div>
        ) 
    } else if (isEditing === 2) {
        return (
            <div className='options-container'>
            <div className='pumpkin-options-zone'>
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
              <div className='option-button' onClick={() => changeEditing(0)}>
                <p className='no-margin'>Back</p>
              </div>
            </div>
          </div>
        )  
    } else if (isEditing === 3) {
        return (
            <div className='scroll-options-container'>
            <div className='features-options-zone'>
              <div className='option-button' onClick={() => addEyes("Eyes-1.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-1.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-2.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-2.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-3.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-3.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-4.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-4.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-5.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-5.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-6.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-6.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-7.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-7.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-8.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-8.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-9.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-9.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addEyes("Eyes-10.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Eyes-10.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => changeEditing(0)}>
                <p className='no-margin'>Back</p>
              </div>
            </div>
          </div>
        )
    }  else if (isEditing === 4) {
        return (
            <div className='scroll-options-container'>
            <div className='features-options-zone'>
              <div className='option-button' onClick={() => addNose("Nose-1.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-1.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-2.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-2.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-3.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-3.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-4.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-4.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-5.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-5.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-6.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-6.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-7.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-7.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-8.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-8.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-9.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-9.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addNose("Nose-10.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Nose-10.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => changeEditing(0)}>
                <p className='no-margin'>Back</p>
              </div>
            </div>
          </div>
        )
    }   else if (isEditing === 5) {
        return (
            <div className='scroll-options-container'>
            <div className='features-options-zone'>
              <div className='option-button' onClick={() => addMouth("Mouth-1.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-1.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-2.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-2.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-3.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-3.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-4.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-4.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-5.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-5.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-6.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-6.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-7.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-7.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-8.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-8.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-9.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-9.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => addMouth("Mouth-10.png")}>
                <img className='features' src={process.env.PUBLIC_URL + '/Images/Mouth-10.png'} alt="" />
              </div>
              <div className='option-button' onClick={() => changeEditing(0)}>
                <p className='no-margin'>Back</p>
              </div>
            </div>
          </div>
        )
    }
}

export default Options;