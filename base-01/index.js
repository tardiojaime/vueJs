const quotes = [
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
  {quote:'the night is darkest just befores the dawn', author: 'the/besth'},
]
const app = Vue.createApp({
  data(){
    return {
      quotes,
      newQuote: ' hi world'
    }
  },
  methods: {
    addQuote(event){
      // console.log(event);
      this.quotes.unshift({quote: this.newQuote, author: 'methods'});
    }
  }
});
app.mount('#myApp');