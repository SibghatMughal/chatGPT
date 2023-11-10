import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import logo from '/assets/logo.png';
// import appIcon from '/assets/appIcon.svg';
// import Discovery from '/assets/Discovery.svg';
// import warning from '/assets/warning.png';
// import settings from '/assets/settings.png';
// import Back from '/assets/Back.png';
// import MicroPhone from '/assets/Microphone.png';
// import arrow from '/assets/arrow.png';
// import responseLogo from '/assets/responseLogo.png';

interface ChatSchema {
  heading: string;
  subHeading: string;
}

const EdgenChat: React.FC = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [renderResponse, setRenderResponse] = useState<boolean>(false);
  const [queray, setQuray] = useState<string>('');
  const [userChat, setUserChat] = useState<any[]>([]);
  const [Botresponse, setBotResponse] = useState('');
  const [rendering, setRendering] = useState(false); // State to control rendering animation
  const [mostRecentQuery, setMostRecentQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [addNewChat, setAddNewChat] = useState([
    { id: 1, title: 'Quick Garlic Parmesan Pasta' },
  ]);


  const schema: ChatSchema[] = [
    {
      heading: 'Design a database schema',
      subHeading: 'for an online merch store',
    },
    {
      heading: 'Create a personal webpage for me',
      subHeading: 'after asking me three questions',
    },
    {
      heading: 'Recommend a dish',
      subHeading: 'to impress a date who’s a picky eater',
    },
    {
      heading: 'Tell me a fun fact',
      subHeading: 'about the roman empire',
    },
  ];



  const handleAddChat = ()=>{
    const newChat = {
      id: addNewChat.length + 1,
      title: `Conversation ${addNewChat.length + 1} Starting`,
    };
    setAddNewChat([...addNewChat, newChat]);
  }

  // Function to generate animation for the response text
  const generateAnimation = (response) => {
    let currentIndex = 0;
    setBotResponse(''); // Reset the response text
    const interval = setInterval(() => {
      if (currentIndex < response.length) {
        setBotResponse((prevResponse) => prevResponse + response[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setRendering(false); // Animation complete, stop rendering
      }
    }, 10);

    // Return a function to clear the interval on component unmount
    return () => clearInterval(interval);
  };


  useEffect(() => {
    if (rendering) {
      const timeoutId = setTimeout(() => {
        setRendering(false);
      }, mostRecentQuery.length * 100); // Adjust the duration based on your preference
      return () => clearTimeout(timeoutId);
    }
  }, [rendering, mostRecentQuery]);


  

  

 


   // Define a function to generate a random response
   function generateRandomText() {
    // const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  
    const customerFields = ['CustomerID (Primary Key)', 'FirstName', 'LastName', 'Email', 'Password (hashed)', 'Address', 'Phone'];
   
    const generateFieldList = (fields) => {
      const numFields = getRandomNumber(1, fields.length);
      return fields.slice(0, numFields).map((field) => `<li>${field}</li>`).join('');
    };
  
    const customers = generateFieldList(customerFields);
  
    const randomRes = `
      <div>
        <p>Creating a database schema for an online merchandise store involves multiple tables to store information about products, customers, orders, and more. Here's a simplified schema with the essential tables and their relationships:</p>
        <p>Customers:</p>
        <ul>
          ${customers}
        </ul>
         <ul>
          ${customers}
        </ul>
        
        <p>This schema covers the basic structure of an online merch store. You can add more tables and fields as needed, such as reviews, product images, and payment information, depending on the complexity of your project.</p>
        <p>Remember that database design can be more intricate depending on specific requirements, so you might want to consult with a database expert to fine-tune the schema for your project.</p>
      </div>
    `;

    return randomRes;
  }
  
  
  
  // Function to add a user query and a random response to userChat
    // Function to add a user query
    const addUserQuery = (query) => {
      const randomText = generateRandomText();
      setMostRecentQuery(query);
      setRendering(true); // Start rendering animation
      generateAnimation(randomText); // Generate the random response and start animation
  
      // Your existing logic to add a user query
      setUserChat([...userChat, { title: query, content: randomText }]);
    };
  

    // Function to get a random item from an array

  const userChats = (queray: string) => {
    setSubmit(true);
    addUserQuery(queray)
    setQuray('');
    setRenderResponse(true);
  };

  
  const copyResponse = (response:string)=>{
    const plainText = htmlToPlainText(response);
    navigator.clipboard.writeText(plainText);
    showToast();
    console.log('you copied the response ',plainText)
  }
 
  


  function htmlToPlainText(html) {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = html;
  
    // Define a recursive function to convert DOM nodes to plain text
    function convertNodeToPlainText(node) {
      let text = '';
  
      // Handle different node types
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const tagName = node.tagName.toLowerCase();
  
        if (tagName === 'ul' || tagName === 'ol') {
          text += '\n';
          const listItems = node.querySelectorAll('li');
          listItems.forEach((item, index) => {
            text += `${index + 1}. ${convertNodeToPlainText(item)}\n`;
          });
        } else {
          // Handle other elements
          const children = node.childNodes;
          for (let i = 0; i < children.length; i++) {
            text += convertNodeToPlainText(children[i]);
          }
        }
      }
  
      return text;
    }
  
    return convertNodeToPlainText(temporaryElement);
  }
  
  

  function truncateText(text:string, maxLength:number) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }


  const handleHistory = ()=>{
    setSubmit(false);
    setUserChat([])
  }

  const handleDeleteChat =(id:number)=>{
    const filterChat = addNewChat?.filter(chat=>chat.id !== id)
    setAddNewChat(filterChat)
  }
  

  const showToast = () => {
    setIsVisible(true);
       console.log('text is rendering ')
    // Set a timeout to hide the toast after 3 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className='w-full px-5 rounded flex items-start gap-3 h-[100vh]'>

 {/* Toast component */}
 {isVisible ? (
        <div
          id="toast-simple"
          className="flex absolute z-10 bottom-2 left-[45%]  items-center w-full max-w-xs p-4 space-x-4 text-dark bg-gray-300 divide-x divide-gray-200 border-[4px] border-gray-200 border-solid rounded-lg shadow drop-shadow-lg"
          role="alert"
        >
          <div className="pl-4 text-sm font-normal">response copied to clipboard</div>
        </div>
      ):''}





      <div className="flex flex-col gap-4  justify-between h-screen hide-vertical-scrollbar">
        <div className='flex flex-col grow gap-4'>
          <div className="w-full bg-white px-9 py-5 rounded-xl drop-shadow-lg cursor-pointer ">
            <img src="/assets/logo.png" alt="logo image" />
          </div>
          <div className="w-full bg-white flex flex-col gap-5 p-5 rounded-xl drop-shadow-lg ">
            <div className='bg-transparent hover:bg-[#ECF0F9] rounded-xl p-5 px-3'>
              <div className='flex items-center justify-around gap-3 w-full rounded-xl  '>
                <img src="/assets/Back.png" alt="Back to app" />
                <img src="/assets/appIcon.svg" alt="app-icon" width={40} height={40} />
              </div>
              <Link to="/" >
                 <button className='text-[22px] text-white w-full py-2 px-4 bg-[#2C6EEF] rounded-xl my-3'>EdgenChat</button>
            </Link>
            </div>
            <div className='flex items-center gap-1 w-full rounded-xl cursor-pointer bg-transparent justify-end p-5 px-7 hover:bg-[#ECF0F9] bg-white drop-shadow-lg' onClick={()=>handleAddChat()}>
              <h2 className='text-black text-[18px] mr-1'>New Chat</h2>
              <img src="/assets/plus.png" alt="plus-icon" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="my-3 flex items-start flex-col gap-3 cursor-pointer">
          {addNewChat?.map((chatBox)=>{
            return (
                <>
              <div className="rounded-[30px]  py-2 px-3  border-[3px] border-[#D0D5E0] border-solid text-[16px] text-[#676C79]">
                 Today
              </div>
              <div className="group flex items-center gap-2 w-full relative rounded-[10px] whitespace-nowrap py-6 px-6 text-[16px] drop-shadow-lg bg-white" onClick={()=>handleHistory()}>
                <div className=' absolute right-[3px] top-[3px] cursor-pointer rounded-full text-black px-[6px] py-[1px] text-[12px] bg-gray-300 hidden group-hover:block' style={{border:'2px solid gray',}} onClick={()=>handleDeleteChat(chatBox.id)}>X</div>
                  <img src="/assets/chat.png" alt="chat" width={24} height={24} />{truncateText(chatBox?.title,20)} 
              </div>
                </>
              
              )
            })}
            </div>
        {/* bottom sidebar  */}
        <div className="w-full bg-white flex grow-0 flex-col gap-5 p-5 rounded-xl drop-shadow-lg ">
          <div className='flex items-center gap-1 w-full rounded-xl cursor-pointer bg-transparent justify-end p-5 px-7 hover:bg-[#ECF0F9] bg-white drop-shadow-lg'>
            <h2 className=' mr-2 text-[18px]'>About</h2>
            <img src="/assets/warning.png" alt="app-icon" width={24} height={24} />
          </div>
          <div className='flex items-center gap-1 w-full rounded-xl cursor-pointer bg-transparent justify-end p-5 px-7 hover:bg-[#ECF0F9] bg-white drop-shadow-lg'>
            <h2 className='mr-2 text-[20px] text-right'>Settings</h2>
            <img src="/assets/settings.png" alt="app-icon" width={24} height={24} />
          </div>
        </div>
      </div>
      <div className="p-6 w-full relative">
        {submit ?
            <div className=' w-full h-[80vh] flex flex-col gap-3 hide-vertical-scrollbar z-0'> 
             {userChat?.map((chat, index) => {
              return (
                <div key={index}> 
                  {/* user query  */}
                  <div className="w-11/12 h-auto flex items-center gap-5 z-20 mb-2">
                    <div className=' w-15 h-15 text-[22px] rounded-full border-[#3E57EA] border-solid border-2 p-4 bg-[#3E57EA] font-bold text-white'>Me</div>
                    <div className="flex flex-col text-left px-3 py-5 w-full rounded-2xl bg-[#F9F9FA] ">
                      <p className='text-black font-bold text-[20px]'>{chat?.title}</p>
                    </div>
                  </div>
                  {/* Ai response  */}
                  <div className="w-11/12 h-auto flex items-start gap-5 z-20 mb-2 relative">
                    <div className=' w-15 h-15 text-[22px] rounded-full border-[#0D95FD] border-solid border-2 p-4 bg-[#0D95FD] font-bold text-white'>
                      <img src="/assets/responseLogo.png" alt="response" className='w-10 h-9 rounded-full'/>
                      </div>
                      <div className="absolute right-[30px] top-3 cursor-pointer" onClick={()=>copyResponse(chat?.content)}><img src="/assets/copy.png" alt ="copy image" width={26} height={26}/></div>
                    <div className="flex flex-col text-left px-3 py-12 w-full ">
                      <p className='text-black font-bold text-[20px]'>
                      {renderResponse ?<div> {index==(userChat.length-1)?<div dangerouslySetInnerHTML={{ __html: Botresponse }} />:<div dangerouslySetInnerHTML={{ __html: chat?.content }} />}</div>: <div>Loading .........</div>}

                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> :
          <div className=" w-full h-full  text-[#676C79] text-[24px] flex items-center justify-center">
            EdgenChat
          </div>
        }
        <div className="w-full fixed bottom-5">
          <div className=' flex align-items-center justify-start flex-col'>
            {/* cards for gpt schema  */}
            {submit ? '' :
              <div className="h-auto w-9/12 mb-3 grid grid-cols-2 gap-4">
                {schema.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex flex-col text-left p-2 w-full rounded-xl bg-white border-[#D0D5E0] border-solid border-2 cursor-pointer" onClick={() => userChats(item.heading)}>
                        <p className='text-black font-bold text-[18px]'>{item.heading}</p>
                        <p className='text-[#676C79] font-medium text-[14px]'>{item.subHeading}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            }
            <div className="w-9/12 h-auto flex items-center gap-5 z-20 mb-2">
              <div className="h-fit-content w-[100%] flex items-center px-3 bg-[#F9F9FA] rounded-[120px]  border-[#D0D5E0] border-solid border-2">
                <input type="text" className='h-full w-full border-none outline-none text-black text-[20px] bg-[#F9F9FA] rounded-full relative z-40 py-3 px-2' value={queray} placeholder="Ask Anything..." onChange={(e) => setQuray(e.target.value)} />
                <img src="/assets/Microphone.png" alt="microphone" width={25} height={25} className=' cursor-pointer h-5 w-5 rounded-full hover-bg-slate-300' />
              </div>
              <div className=' w-14 h-14 cursor-pointer rounded-full border-[#D0D5E0] border-solid border-2 p-4 bg-[#F9F9FA]' onClick={() => userChats(queray)}><img src="/assets/arrow.png" alt="arrow" /></div>
            </div>
            <p className='flex items-center text-[14px] text-[#676C79] ml-20'>Model: zephyr-7b-alpha <span className='h-3 w-3 rounded-full text[#676C79] mx-1'></span>EdgenChat can make mistakes. Verify important information.<span className='h-3 w-3 rounded-full text[#676C79] mx-1'></span>Powered by ⚡ Edgen </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdgenChat;
