// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions{
    uint256 contadorTransacao;
    event Transfer(address from, address receptor, uint quantidade, string menssagem, uint256 timestamp, string senha);
    
    struct EstruturaTransferencia{
        address remetente;
        address receptor;
        uint quantidade;
        string documento;
        uint256 timestamp;
        string senha;
    }

    EstruturaTransferencia[] transactions;

    function addBlockchain(address payable receptor, uint quantidade, string memory menssagem,string memory senha) public{
        contadorTransacao += 1;
        transactions.push(EstruturaTransferencia(msg.sender, receptor, quantidade, menssagem, block.timestamp, senha));

        emit Transfer(msg.sender, receptor, quantidade, menssagem, block.timestamp, senha);
    }

    function getTransaction() public view returns (EstruturaTransferencia[] memory){
        return transactions;
    }

    function getCountTransaction() public view returns (uint256){
        return contadorTransacao;
    }
}

