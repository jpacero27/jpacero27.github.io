const peter=
{
  firstName:'Peter',
  lastName:'Smith',
  birthYear:1990,
  jobTitle:'student',
  score:[100,99,90,96],

  calAvgScore: function() {
    this.avgScore = (this.score[0]+this.score[1]+this.score[2]+this.score[3])/this.score.length;
    return this.avgScore
  },
  highestScore: function(){
      let highScore=this.score[0];
      for (let i = 1; i < this.score.length; i++)
      {
          if(highScore<this.score[i])
          {
            highScore=this.score[i];
          }
      }
      return highScore
    },

  showSummary: function()
  {
    let result = this.calAvgScore();
    let high=this.highestScore();
    let summary=(`${this.firstName} ${this.lastName} has completed ${peter.score.length} tasks, and ${this.firstName}'s average score is ${result}, ${this.firstName}'s highest score ${high}`)
    return summary;
  }
}


 console.log(peter.showSummary());

 //Part B
 console.log(' ')
  console.log('Part B')

  function cToF(num)
 {
    // let

    while(num<-88 || num >58||!Number(num))
    {
      console.log('Enter °C to be converted');
      num=Number(prompt('Please enter a temp between -88°C and 58°C'));
    }
      let conversion=((num*9/5)+32);
      final =(`${num}°C is ${conversion}°F `)
      return final;

  }

console.log(cToF(num=Number(prompt('Enter °C to be converted'))));

console.log('Part 3')




// First modal
let modal = document.getElementById("modal1");
let btn = document.querySelector('#btn1');
let span = document.getElementsByClassName("close")[0];
btn.addEventListener('click',function()
{
  modal.style.display = "block";
});

span.addEventListener('click',function()
{
  modal.style.display = "none";
});


// Second modal
let secModal = document.getElementById('secmodal');
let secBtn = document.querySelector('#btn2');
let secSpan = document.getElementsByClassName("close2")[0];

secBtn.addEventListener('click',function()
{
  secModal.style.display = "block";
});

secSpan.addEventListener('click',function()
{
  secModal.style.display = "none";
});


// Third Modal
let thirdModal = document.getElementById('thirdmodal');
let thirdBtn = document.querySelector('#btn3');
let thirdSpan = document.getElementsByClassName("close3")[0];
thirdBtn.addEventListener('click',function()
{
  thirdModal.style.display = "block";
});
thirdSpan.addEventListener('click',function()
{
  thirdModal.style.display = "none";
});
