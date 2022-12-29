import React,{useState} from 'react';
import './Contact.css'
import $ from 'jquery';

function Contact(props) {

    const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

        $('form').on('click submit','[type="submit"]',function(){
            // prop, hasClass, is~~~ 이런형태의 메서드는 return값이 true, false - if문
            //attr를 접근하면 안돼~ #agree가 check되지 않았다면...
            //$('#chkBox').prop("checked", true);
            //.prop("checked")
            //.is(":checked")
            if(!$('#agreen').is('checked')){
                alert('개인정보정책에 동의해주세요.')
                return false
            }
            
        })
        const areaSelectE1 = document.querySelectorAll('form .js-selectDiv')[0];
        const areainput = document.getElementsByName('area')[0];

        // areaSelectE1.addEventListener('click', function(e){
        // this.classList.toggle('on');
        // });

        let areali = document.querySelectorAll('form .js-selectDiv li');

        areali.forEach(function(el, index){
            el.addEventListener('click',function(){
                let _thisText = this.innerHTML;
                document.querySelector('form .js-selectDiv p').innerHTML = _thisText;
                areainput.value = _thisText;
            })
        })
        // document.querySelector('#popClick').addEventListener('click', function(){
        //     document.body.classList.add('show');
        // })
        // document.querySelector('#popagree button').addEventListener('click', function(){
        //     document.body.classList.remove('show');
        // })
    return (
        <div className='contactBg'>
            <div class="form container position-relative my-5">
                <h1 class="text-center text-white">CONTACT</h1>
                <form action="데이터를 저장해줄 서버페이지경로" method="post" name="contact" id="contact">
                <input type="hidden" name="area" />
                <ul class="row">
                    <li class="col-md-4">
                        <div class="line hoverline bg-dark">
                            <p class=" formindent mb-0">
                                <label class="bg-dark px-2">회사명</label>
                            </p>
                            <p class="formindent">
                                <input type="text" name="company" class="d-block input_text_line border-bottom" placeholder="회사명을 입력해주세요." />
                            </p>
                        </div>
                    </li>
                    <li class="col-md-2 " onClick={()=>toggleMenu()}>
                        <div className='line js-selectDiv bg-dark  overflow-hidden position-relative {isOpen ? "on" : }' >
                            <p class="pt-2 text-center">지역선택<i class="xi-angle-down textColor"></i>
                            </p>
                            <ul class="position-absolute">
                                <li>잠실</li>
                                <li>강남</li>
                                <li>정자</li>
                                <li>판교</li>
                            </ul>
                        </div>
                    </li>
                    <li class="col-md-6 d-none d-md-block">
                        <div id="formId" class="position-absolute">
                            <img src="./img/fromImg1.png"  alt="" />
                        </div>
                    </li>

                    <li id="company_name" class="col-md-2">
                        <div class="line d-flex flex-column formindent">
                            <p class="formindent mb-0">
                                <label for="" class="bg-dark px-2">담당자명</label>    
                            </p>
                            <p class="overflow-hidden">
                                <input type="text" name="people" class="input_text_line border-bottom" placeholder="성함" />
                            </p>     
                        </div>
                    </li>
                    <li class="col-md-4">
                        <div class="line d-flex flex-column formindent">
                            <p class="formindent mb-0">
                                <label for="" class="bg-dark px-2">연락처</label>
                            </p>
                            <p>
                                <input type="text" name="contactsns" class="input_text_line border-bottom" placeholder="카톡 or 메일 or 연락처 남겨주세요." />
                            </p>
                            
                        </div>
                    </li>

                    <li class="col-md-12">
                        <div class="line d-flex flex-column pb-5">
                            <p class=" formindent mb-0">
                                <label class="bg-dark px-2">남기고 싶은 말</label>
                            </p>
                            <p class="formindent ">
                                <input type="text" name="company" class="d-block input_text_line border-bottom" placeholder="자유롭게 작성 부탁드립니다." />
                            </p>
                        </div>
                    </li>
                </ul>
                <div class="mt-5">
                    <p>
                        <input type="checkbox" id="agreen" class=" bg-red" />
                        <label for="agreen" class="xi-radiobox-blank">개인정보정책 <a href="#popagree" id="popClick">약관</a></label>
                    </p>
                    <p>
                        <input type="submit" class="bg-dark line px-3" value="보내기" />
                    </p>
                </div>
                </form>
                </div>
                <div id="popagree" class="position-absolute bg-dark border ">
                <div class="popconent text-center d-flex justify-content-around">
                    약관 가져오기 iframe으로
                    <button class="xi-close-circle border-0 bg-transparent">닫기</button>
                </div>
        </div>
        </div>
    );

    }
export default Contact;