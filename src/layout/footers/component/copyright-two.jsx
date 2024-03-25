import React from 'react';

const CopyrightTwo = () => {
    return (
        <div className="bd-footer-copyright pb-5 pt-25">
            <div className="bd-footer-copyright-wrap d-flex justify-content-center">
                <div className="bd-footer-copyright-text is-white pb-20">
                    <p>Copyrighted by &copy;{new Date().getFullYear()} <a href="https://themeforest.net/user/bdevs/portfolio"
                        rel="nofollow">BDevs</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CopyrightTwo;