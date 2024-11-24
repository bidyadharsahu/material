
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Storage {
    struct File {
        string fileHash;
        string metadata;
    }

    mapping(address => File[]) public files;

    function uploadFile(string memory _fileHash, string memory _metadata) public {
        files[msg.sender].push(File(_fileHash, _metadata));
    }

    function getFiles(address user) public view returns (File[] memory) {
        return files[user];
    }
}
    