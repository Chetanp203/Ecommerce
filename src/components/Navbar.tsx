import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="h-24 w-full ">
            <div>
                <ul className="flex w-full gap-2 justify-end ">
                    <li>Help</li>
                    <li>Orders & Returns</li>
                    <li>HI,John</li>
                </ul>
            </div>
            </div>
        );
    }
}

export default Navbar;