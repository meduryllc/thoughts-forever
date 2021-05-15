
pragma solidity >=0.7.0 <0.9.0;

contract Owner {

    uint noOfStreams;
    constructor () public {
        noOfStreams = 0;
        streams['independent_stream'].createdBy = msg.sender;
        streams['independent_stream'].streamName = 'Independent Stream';
        streams['description'].description = 'Posts not part of any stream live here';
        streams['independent_stream'].createdOn = block.timestamp;
        streams['independent_stream'].isActive = true;
        streams['independent_stream'].isCreated=true;
    }
    
    struct stream {
        address createdBy;
        string streamName;
        string description;
        uint256 createdOn;
        mapping(address => bool) members;
        mapping (uint => Thought) thoughts;
        bool isActive;
        bool isCreated;
        uint noOfThoughts;
    }
    
    struct Thought {
        address createdBy;
        uint256 createdOn;
        string content_p1;
        string content_p2;
        
    }   
    
    mapping(string => stream) streams;
    
    modifier onlyOwnerOfStream(string memory _name) {
      require(streams[_name].createdBy == msg.sender);
      _;
    }
    
    modifier streamActive(string memory _name) {
      require(streams[_name].isActive == true);
      _;
    }
    
    
   
    function createStream (string memory _streamName, string memory _description) public {
        require(streams[_streamName].isCreated == false, "Stream with this name already exists");
        //new stream();
    }
    
    function joinStream (string memory _streamName) streamActive(_streamName) public {
        //join stream();
    }
    
    function exitStream (string memory _streamName) streamActive(_streamName) public {
        require(streams[_streamName].members[msg.sender] == true, "You're not a member of this stream");
        //exit Stream();
    }
    
    function modifyNameOfStream (string memory _oldName, string memory _newName) streamActive(_oldName) onlyOwnerOfStream(_oldName) public {
        //change name();
    }
    
    function deleteStream (string memory _streamName) streamActive(_streamName) onlyOwnerOfStream(_streamName) public {
        //delete stream();
    }
    
    //For posting to stream
    function postThought(string memory _streamName, string memory _p1, string memory _p2) streamActive(_streamName) public {
        //post thought to the stream
    }
    
    //For posting to independent stream
    function postThought(string memory _p1, string memory _p2) public {
        //post thought to the stream
    }

}
