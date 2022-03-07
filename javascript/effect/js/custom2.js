
        

//highlight
const highlight = function(){
    hljs.highlightAll()
}
highlight();

//modal
const modal = function (){
    //버튼을 클릭하면 modal창을 보이게 해주세요.(show를 추가)
    document.querySelector(".source-btn").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });
    document.querySelector(".modal-close").addEventListener("click", () => {
        document.querySelector("#modal").classList.add("hide");
    });
}
modal();

//tabmenu
const tabMenu = function (){
    const tabBtn = document.querySelectorAll(".menu-bar > span")
    const tabCont = document.querySelectorAll(".view-cont > div")

    //각각의 버튼을 클릭하면 경고창
    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {

            //내가 클릭하지 않은건 active 삭제
            // for of 문
            // for(let i of tabBtn){
            //     i.classList.remove("active")
            // }
            // for 문
            // for(let i=0; i<tabBtn.length; i++){
            //     tabBtn[i].classList.remove("active")
            // }
            tabBtn.forEach((el) => {
                el.classList.remove("active")
            })
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach(el => {
                el.style.display = "none";
            })
            //내가 클릭한 컨텐츠 박스 보이게
            tabCont[index].style.display = "block"
            })
        })                    
    }
tabMenu();
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        //jquery는 document. 대신 $표시를 사용함.
        const modal = function(){
            $(".source-btn").click(()=>{     //document.querySelector(".source-btn").addEventListener("click", () => {
                $("#modal").addClass("show");   //document.querySelector("#modal").classList.add("show");});
            });
            $(".modal-close").click(()=>{       //document.querySelector(".modal-close").addEventListener("click", () => {
                $("#modal").removeClass("show")     //document.querySelector("#modal").classList.remove("show");});
            });
        }
        modal();
        
    </script>         */}