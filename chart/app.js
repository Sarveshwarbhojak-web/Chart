const age = ["Age", 5, 10, 15, 20, 25, 30, 35, 40];
const income = [1000, 2000, 3000, 6000, 12000, 24000, 48000, 96000];
const exp =    [700, 1300, 2000, 4000, 8000, 23000, 48000, 70000]

const myChart = new Chart("myChart", {
    type: "line",
    data: {
        labels: age,
        datasets: [{
            label: "Income",
            data: income,
            borderColor: 'white',
            backgroundColor: '',

        },
        {
            label: "Expenses",
            data: exp,
            borderColor: '#5e440f',
            backgroundColor: '',
        }
        ],

        options: {
            title: {
              display: true,
              text: "World Wide Wine Production"
            }
          }    

}
})