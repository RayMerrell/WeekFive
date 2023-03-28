import './App.css';
import Person from './components/Person';
import Job from './components/Job';
import Netflix from './components/Netflix';
import Holiday from './components/Holiday';
import BBC from './components/BBC';

function App() {
  let arrImages=["https://unsplash.it/200/250", "https://unsplash.it/201/250", "https://unsplash.it/202/250", "https://unsplash.it/203/250", "https://unsplash.it/204/250"];
  let arrHolidayHomes=["https://unsplash.it/251/250", "https://unsplash.it/250/250", "https://unsplash.it/252/250", "https://unsplash.it/253/250"];
  let arrDescriptions=["Entire Homes", "Unique Stays", "Cabins and cottages", "Pets allowed"]
  let arrBBC = [
    {
      imageSRC:"https://unsplash.it/100/250",
      alt:"",
      title:"Don't think pandemic is over, Whitty warns",
      paragraph:"Unlocking too quickly would lead to a substantial surge in infection, UK chief medical advisor says.",
      age:"3h",
      cat:"Health",
      flags:""  
    },
   {
      imageSRC:"https://unsplash.it/100/251",
      alt:"",
      title:"Pay rise was set to be 2.1% - NHS chief",
      paragraph:"NHS England boss backs ministers over pay dispute but does not rule out a one-off bonus for workers.",
      age:"1h",
      cat:"UK Politics",
      flags:""  
    },
    {
      imageSRC:"https://unsplash.it/102/252",
      alt:"",
      title:"Charity crisicises Morgan's comments about Meghan",
      paragraph:"Mental health charity Mind says it is 'disapointed' by comments Piers Morgan made on Monday.",
      age:"2h",
      cat:"Entertainment and arts",
      flags:"" 
    },
    {
      imageSRC:"https://unsplash.it/100/253",
      alt:"",
      title:"Unilever drops word 'normal' from beauty products",
      paragraph:"The owner of Dove and vasseline will remove the word from about 200 products in a push  for inclusivity.",
      age:"3h",
      cat:"Health",
      flags:""  
    }
    
    ];
  
  return (
    <div className="App">
      <h1>Hello World</h1>    
        <Person name="Jordan" age="31" petName="Penny" />  
          <Job jobTitle="Journalist" />

        <Person name="Tom" age="42" petName="Dawgy"/> 
          <Job jobTitle = "Junior Developer"/>
        
        <Person name="Bob" age="21" petName="Moggs"/>   
          <Job jobTitle="Bin Man" />
        <Netflix imageSRC={arrImages} alt="" />
        <br />
        <Holiday imageSRC={arrHolidayHomes} alt="" descriptions={arrDescriptions} />
        <BBC data={arrBBC} />
    </div>
  );
}

export default App;

////https://materializecss.com
///https://fonts.google.com/icons
//https://github.com/JMCromp/broken-mern-auth
//https://create-react-app.dev/docs/adding-images-fonts-and-files/


