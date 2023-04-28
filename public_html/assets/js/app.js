const addBtn = document.getElementById("add__btn")
const rootDiv = document.getElementById("root")
let iter = 0;

addBtn.onclick = function addNote(){
   iter+=1
   let label_for_div = document.createElement("label")
   label_for_div.innerHTML = "Заметка №"+iter
   label_for_div.id = "note_"+iter
   label_for_div.setAttribute("for", "div")
   rootDiv.appendChild(label_for_div)
   let div = document.createElement("div");
   let note_inp = document.createElement("div");
   let note_div = document.createElement('div')
   let choose_color = document.createElement("input")
   choose_color.setAttribute("type", "color")
   choose_color.className = "choose_color"
   choose_color.id = "color_id_" + iter


   rootDiv.appendChild(div);
   div.id = "div_note_"+iter
   div.style.marginTop = "20px";
   div.style.background = "grey"
   choose_color.onchange = function (){
      div.style.background = choose_color.value
   }
   div.style.maxWidth = "400px"
   div.style.height = "300px";
   div.style.position = "relative";
   div.innerHTML="<div class='note'></div>";
   div.style.wordBreak = "break-all"

   const addnote__btn = document.createElement("button");
   addnote__btn.className = "inner_buttons_ADD"
   addnote__btn.id = "add_btn" + iter
   addnote__btn.innerHTML = "Add";
   addnote__btn.onclick = function (e){
      // let clicked = e.target
      editnote__btn.removeAttribute("hidden")
      note_div.id = "note_div_" + iter
      div.appendChild(note_div)
      note_div.innerHTML = document.getElementById("ta_"+iter).value
      note_inp.remove("ta_"+iter)

   }

   const deletenote__btn = document.createElement("button");
   deletenote__btn.className = "inner_buttons_DEL"
   deletenote__btn.id = "delete_note_" + iter
   deletenote__btn.innerHTML = "Delete";
   deletenote__btn.onclick = function (e){
      iter-=1
      let clicked = e.target
      console.log(clicked.id)
      div.remove("div_note_"+clicked.id)
      choose_color.remove("color_id_"+iter)
      addnote__btn.remove("add_btn"+iter)
      deletenote__btn.remove("delete_note_"+iter)
      editnote__btn.remove(iter)
      note_inp.remove("ta_"+iter)
      label_for_div.remove("note_"+iter)
   }

   const editnote__btn = document.createElement("button");
   editnote__btn.className = "inner_buttons_EDIT"
   editnote__btn.id = iter
   editnote__btn.innerHTML = "Edit";
   editnote__btn.setAttribute("hidden", "true")
   editnote__btn.onclick = function (e){
      let clicked = e.target;
      console.log("clicked");
      let content = document.getElementById("note_div_"+clicked.id).value
      note_div.remove("note_div_"+clicked.id)
      editnote__btn.setAttribute("hidden", "true")
      console.log(note_inp)
      rootDiv.appendChild(note_inp)
   }
   rootDiv.appendChild(choose_color)
   rootDiv.appendChild(addnote__btn);
   rootDiv.appendChild(deletenote__btn);
   rootDiv.appendChild(editnote__btn);

   rootDiv.appendChild(note_inp);
   note_inp.innerHTML = "<textarea placeholder='ваша заметка...' id=ta_"+iter+" class='textarea_note'></textarea>"
}
// я люблю тебя:3