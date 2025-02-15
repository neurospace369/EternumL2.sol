// SPDX-License-Identifier: CC-BY-ND-4.0
pragma solidity ^0.8.21;

contract EternumL2 {
    uint256 public constant PRIME_KEY = 235567;  // 🔥 Immutable Prime Security Key

    constructor() {
        require(PRIME_KEY > 0, "Invalid Prime Key");
    }

    function verifyPrimeKey(uint256 input) public pure returns (bool) {
        return input == PRIME_KEY;
    }
}
