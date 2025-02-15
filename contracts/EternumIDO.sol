// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EternumIDO is Ownable {
    IERC20 public token;
    uint256 public rate; // Token price per ETH
    uint256 public totalTokensSold;
    bool public saleActive;

    event TokensPurchased(address indexed buyer, uint256 amount, uint256 cost);

    constructor(address _token, uint256 _rate) {
        require(_token != address(0), "Invalid token address");
        require(_rate > 0, "Rate must be greater than zero");

        token = IERC20(_token);
        rate = _rate;
        saleActive = false;
    }

    function buyTokens() external payable {
        require(saleActive, "Sale is not active");
        require(msg.value > 0, "Send ETH to buy tokens");

        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokenAmount, "Not enough tokens");

        token.transfer(msg.sender, tokenAmount);
        totalTokensSold += tokenAmount;

        emit TokensPurchased(msg.sender, tokenAmount, msg.value);
    }

    function startSale() external onlyOwner {
        saleActive = true;
    }

    function stopSale() external onlyOwner {
        saleActive = false;
    }

    function withdrawETH() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function withdrawTokens(uint256 amount) external onlyOwner {
        require(token.balanceOf(address(this)) >= amount, "Not enough tokens");
        token.transfer(owner(), amount);
    }
}
