import React, {Component} from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


class Navbar extends Component {
    render() {
        return (
            <div className="h-24 w-full ">
            <div className="h-9 px-4 py-1">
                <ul className="flex w-full gap-3 justify-end ">
                    <li>Help</li>
                    <li>Orders & Returns</li>
                    <li>Hi,John</li>
                </ul>
            </div>
                <div className="flex justify-between px-4">
                    <div className="font-bold text-3xl">
                        ECOMMERCE
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>Categories</li>
                            <li>Sale</li>
                            <li>Clearance</li>
                            <li>New Stock</li>
                            <li>Trending</li>
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <FiShoppingCart />
                        <HiMiniMagnifyingGlass />
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;