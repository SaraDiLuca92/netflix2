import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
      <div class="row text-center mt-5">
        <div class="col-6 offset-3">
          <div class="row">
            <div class="icons col col-12 text-left mb-2">
              <FaFacebookF />

              <FaInstagram />

              <FaTwitter />

              <FaYoutube />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col col-12 footer-links">
                  <p>
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 text-left mb-2">
              <button
                type="button"
                class="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col col-12 text-left mb-2 mt-2 copyright">
              ?? 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
