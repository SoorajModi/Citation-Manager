import React, { useState } from 'react';
import '../../css/subpage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Authors from '../formComponents/Authors';
import Citation from '../formComponents/Citaton';
import StringComponent from '../formComponents/StringComponent';
import Pages from '../formComponents/Pages';

const { journal } = require('chicagomanualofstyle');

function ChicagoJournal() {
  const emptyValue = { value: '' };
  const [title, setTitle] = useState(emptyValue);
  const [publisher, setPublisher] = useState(emptyValue);
  const [yearOfPublication, setYearOfPublication] = useState(emptyValue);
  const [volume, setVolume] = useState(emptyValue);
  const [issue, setIssue] = useState(emptyValue);
  const [startRange, setStartRange] = useState(emptyValue);
  const [endRange, setEndRange] = useState(emptyValue);
  const [URL, setURL] = useState(emptyValue);
  const [authors, setAuthors] = useState([]);
  const [pages, setPages] = useState([]);
  const [citation, setCitation] = useState({ bibliography: '', notes: [] });

  const generateCitation = () => {
    const cmos = journal({
      title: title.value || 'Must Specify Title',
      authorList: authors,
      publisher: publisher.value,
      yearOfPublication: yearOfPublication.value,
      volume: volume.value,
      issue: issue.value,
      startRange: startRange.value || '1',
      endRange: endRange.value || startRange.value || '1',
      url: URL.value,
    }, pages);

    setCitation({ bibliography: cmos.bibliography, notes: cmos.notes });
  };

  return (
    <Container>
      <h1 className="subpage-heading">Chicago Style Journal Citation</h1>
      <Card className="data-entry">
        <Container className="form-start">
          <StringComponent formLabel="Title" str={title} setStr={setTitle} generateCitation={generateCitation} />
          <StringComponent formLabel="Publisher" str={publisher} setStr={setPublisher} generateCitation={generateCitation} />
          <StringComponent formLabel="Year of Publication" str={yearOfPublication} setStr={setYearOfPublication} generateCitation={generateCitation} />
          <StringComponent formLabel="Volume" str={volume} setStr={setVolume} generateCitation={generateCitation} />
          <StringComponent formLabel="Issue" str={issue} setStr={setIssue} generateCitation={generateCitation} />
          <StringComponent formLabel="Start Range" str={startRange} setStr={setStartRange} generateCitation={generateCitation} />
          <StringComponent formLabel="End Range" str={endRange} setStr={setEndRange} generateCitation={generateCitation} />
          <StringComponent formLabel="URL/DOI" str={URL} setStr={setURL} generateCitation={generateCitation} />
          <Authors authors={authors} setAuthors={setAuthors} generateCitation={generateCitation} />
          <Pages pages={pages} setPages={setPages} generateCitation={generateCitation} />
          <Citation citation={citation} generateCitation={generateCitation} />
        </Container>
      </Card>
    </Container>
  );
}

export default ChicagoJournal;
