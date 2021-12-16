function Heroform(props) {
    return <>
        <div class="heroformOuter">
            <div class="heroform">
                <h3><span>Quick</span> Contact Us</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Your name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" name="name" placeholder="Message"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="mainBtn border-0 px-5" value="Send Us" />
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Heroform;
