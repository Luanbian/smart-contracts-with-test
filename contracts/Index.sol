// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract Index {
    string public message = "Hello world";

    function hello () public view returns(string memory) {
        return message;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
