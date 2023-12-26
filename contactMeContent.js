export let  contactMeContent =`
<section class="contact-me-tab _box">
                <form action="" class="contact-me  ">
                    <div class="contact-me__inputs-box">
                    <div class="contact-me__info">
                        <p class="contact-me__input-title">Name</p>
                        <input type="text" id="input__name" class="contact-me__input">
                    </div>
                    <div class="contact-me__info">
                        <p class="contact-me__input-title">Surname</p>
                        <input type="text" id='input__surname' class="contact-me__input">
                    </div>
                    <!-- div class="contact-me__info">
                        <p class="contact-me__input-title">Email</p>
                        <input type="text" id='input__email' class="contact-me__input">
                    </div> -->
                    <div class="contact-me__info">
                        <p class="contact-me__input-title">Phone</p>
                        <input type="text" id="input__phone" class="contact-me__input">
                    </div>
                    <div class="contact-me__info _request-topic">
                        <label for="request-topic" class="contact-me__input-title">Request Topic</label>
                        <select id="request-topic"  class="request-topic__select">
                            <option value="Work Proposal">Work Proposal</option>
                            <option value="Problem">Problem</option>
                            <option value="Money back">Money back</option>
                          </select>
                    </div>
                    </div>
                    <textarea name="" id="input__main-text" cols="30" rows="10"  class="contact-me__textbox"></textarea>
                    <button type="submit" class="contact-me__btn _btn">Submit</button>
                </form>
                
            </section>
`