import React from 'react';

export default function CompLogin() {
   return (
      <div style={{width:"1000px", margin:"auto"}}>
         <h1>Post :: 로그인 폼</h1>
         <form>
            <ul>
               <li>
                  <label htmlFor="id">아이디</label>
                  <input type="text" 
                           id="id"
                           name="id"
                           />
               </li>
               <li>
                  <label htmlFor="password">비밀번호</label>
                  <input type="password" 
                           id="password"
                           name="password"
                           />
               </li>
            </ul>
         </form>
      </div>
   );
}
