(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(n,t,e){},33:function(n,t,e){"use strict";e.r(t);var a,c,o,r,i=e(1),s=e.n(i),l=e(11),d=e.n(l),u=(e(20),e(5)),b=e(14),h=e(6),p=e(7),j=e(9),x=e(8),f=e(12),m=e.n(f),g=e(2),O=e(3),v=O.a.form(a||(a=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),C=O.a.input(c||(c=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n  width: 50%;\n  :focus {\n    border: 3px solid #555;\n  }\n"]))),y=O.a.button(o||(o=Object(g.a)(["\n  display: inline-block;\n  padding: 5px 10px;\n  margin-left: 10px;\n  font-size: 14px;\n  width: 100px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 9px #999;\n\n  :hover {\n    background-color: #3e8e41;\n  }\n  :active {\n    background-color: #3e8e41;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"]))),k=e(0),w=function(n){Object(j.a)(e,n);var t=Object(x.a)(e);function e(){var n;Object(h.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=t.call.apply(t,[this].concat(c))).state={name:"",number:""},n.handleInputChange=function(t){var e=t.currentTarget,a=e.name,c=e.value;n.setState(Object(u.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAdd(n.state),n.reset()},n.reset=function(){return n.setState({name:"",number:""})},n}return Object(p.a)(e,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(v,{onSubmit:this.handleSubmit,children:[Object(k.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:this.state.name,onChange:this.handleInputChange,required:!0}),Object(k.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInputChange,required:!0}),Object(k.jsx)(y,{type:"submit",children:"Add contact"})]})})}}]),e}(i.Component),S=O.a.button(r||(r=Object(g.a)(["\n  display: inline-block;\n  padding: 5px 5px;\n  margin-left: 10px;\n  font-size: 10px;\n  width: 50px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n  border-radius: 15px;\n  /* box-shadow: 0 9px #999; */\n\n  :hover {\n    background-color: red;\n  }\n  :active {\n    background-color: red;\n    box-shadow: 0 5px #666;\n    transform: translateY(4px);\n  }\n"])));var A=function(n){var t=n.contacts,e=n.onDeleteContact;return Object(k.jsx)(k.Fragment,{children:t.length>0?Object(k.jsx)("ul",{children:t.map((function(n){return Object(k.jsxs)("li",{children:[Object(k.jsxs)("span",{children:[n.name,":"]}),Object(k.jsx)("span",{children:n.number}),Object(k.jsx)(S,{onClick:function(){return e(n.id)},type:"button",children:"Delete"})]},n.id)}))}):Object(k.jsx)("p",{children:"Contact list is empty"})})};var I,z=function(n){var t=n.filter,e=n.onChange;return Object(k.jsxs)(k.Fragment,{children:["Find contacts by name:",Object(k.jsx)(C,{type:"text",name:"filter",autoComplete:"off",value:t,onChange:e})]})},D=O.a.div(I||(I=Object(g.a)(["\n  width: 400px;\n  padding: 20px;\n  margin: 20px;\n  border: 1px solid black;\n"]))),N=function(n){Object(j.a)(e,n);var t=Object(x.a)(e);function e(){var n;Object(h.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},n.addNewContact=function(t){var e={id:m.a.generate(),name:t.name,number:t.number};n.state.contacts.find((function(n){return n.name===t.name}))?alert("".concat(t.name," is already in contacts.")):n.setState((function(n){return{contacts:[e].concat(Object(b.a)(n.contacts))}}))},n.handleInputChange=function(t){var e=t.currentTarget,a=e.name,c=e.value;n.setState(Object(u.a)({},a,c))},n.deleteContact=function(t){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==t}))}}))},n}return Object(p.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts"),t=JSON.parse(n);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(n,t){this.state.contacts!==t.contacts&&(console.log("\u043e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var n=this.state,t=n.contacts,e=n.filter,a=e.toLowerCase(),c=t.filter((function(n){return n.name.toLowerCase().includes(a)}));return Object(k.jsxs)(D,{children:[Object(k.jsx)("h1",{className:"title",children:"Phonebook"}),Object(k.jsx)(w,{onAdd:this.addNewContact}),Object(k.jsx)("h2",{className:"title",children:"Contacts"}),Object(k.jsx)(z,{filter:e,onChange:this.handleInputChange}),Object(k.jsx)(A,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),e}(i.Component);d.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.b6067dd0.chunk.js.map