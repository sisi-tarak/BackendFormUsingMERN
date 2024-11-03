import React, { useState } from "react";
import "../Signup/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [studentname, setStudentName] = useState();
  const [email, setEmail] = useState();
  const [mobileno, setMobileno] = useState();
  const [address, setAddress] = useState();
  const [collegename, setCollegeName] = useState();
  const [rollno, setRollNo] = useState();
  const [branch, setBranch] = useState();
  const [studyyear, setStudyYear] = useState();
  const [academicperformance, setAcademicPerformance] = useState();
  const [streamedfrom, setStreamedFrom] = useState();
  const [weeklyhours, setWeeklyHours] = useState();
  const [otherprograms, setOtherPrograms] = useState();
  const [projects, setProjects] = useState();
  const [github, setGitHub] = useState();
  const [interesteddomain, setInterestedDomain] = useState();
  const [shortgoal, setShortGoal] = useState();
  const [internships, setInternships] = useState();
  const [linkedin, setLinkedIn] = useState();
  const [interested, setInterested] = useState();
  const [expectation, setExpectation] = useState();
  const [skills, setSkills] = useState();
  const [resume, setResume] = useState();
  const [agree, setAgree] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/register", {
        studentname,
        email,
        mobileno,
        address,
        resume,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen bg-[#202227] text-[#8692a6] font-poppins p-4">
      <div className="title">
        <h2>Welcome!! 👋</h2>
        <label htmlFor="headdingtitle">Kindly fill in your details...</label>
      </div>

      <div className="bango">
        <form onSubmit={handleSubmit}>
          <div className="modex">
            <div className="row1">
              <div className="cl1">
                <label htmlFor="Name">Name of the Student*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  id="inputs"
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Email">Email Address*</label>
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  id="inputs"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Mobile">Mobile number*</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter Mobile number"
                  id="inputs"
                  onChange={(e) => setMobileno(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Address">Current Address*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Current Address"
                  id="inputs"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="row1">
              <div className="cl1">
                <label htmlFor="College">Name of the College*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your College name"
                  id="inputs"
                  onChange={(e) => setCollegeName(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="RollNo">Roll No*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Roll No"
                  id="inputs"
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Branch">Branch*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Branch"
                  id="inputs"
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Year">Year of the Study*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Current Year"
                  id="inputs"
                  onChange={(e) => setStudyYear(e.target.value)}
                />
              </div>
            </div>

            <div className="row1">
              <div className="cl1">
                <label htmlFor="Performance">
                  Academic Performance (Latest)*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your latest Sem CGPA"
                  id="inputs"
                  onChange={(e) => setAcademicPerformance(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Stream">Streamed From*</label>
                <input
                  type="text"
                  required
                  placeholder="Streamed From"
                  id="inputs"
                  onChange={(e) => setStreamedFrom(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Hours">
                  Weekly Hours committed to this program*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Time You can spend"
                  id="inputs"
                  onChange={(e) => setWeeklyHours(e.target.value)}
                />
              </div>

              <div className="cl1">
                <label htmlFor="Programs">
                  Are you Involved in any programs*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your Programs"
                  id="inputs"
                  onChange={(e) => setOtherPrograms(e.target.value)}
                />
              </div>
            </div>

            <div className="dix flex justify-center">
              <div className="col1">
                <div className="cl1">
                  <label htmlFor="Projects">Projects*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Projects"
                    id="inputs"
                    onChange={(e) => setProjects(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Github">Github Profile*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Github profile Link"
                    id="inputs"
                    onChange={(e) => setGitHub(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Domain">
                    Which Domain are you Interested in*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Interests"
                    id="inputs"
                    onChange={(e) => setInterestedDomain(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Goal">What is your short term Goal*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Goal"
                    id="inputs"
                    onChange={(e) => setShortGoal(e.target.value)}
                  />
                </div>
              </div>

              <div className="col1">
                <div className="cl1">
                  <label htmlFor="Internships">Internships*</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your internship details"
                    id="inputs"
                    onChange={(e) => setInternships(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Linkedin">Linkedin Profile*</label>
                  <input
                    type="text"
                    required
                    placeholder="Linkedin profile Link"
                    id="inputs"
                    onChange={(e) => setLinkedIn(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Interest">
                    Why are you interested in this program*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your Interests"
                    id="inputs"
                    onChange={(e) => setInterested(e.target.value)}
                  />
                </div>

                <div className="cl1">
                  <label htmlFor="Expectations">
                    What do you expect through this program*
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your expectations"
                    id="inputs"
                    onChange={(e) => setExpectation(e.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="Skills">Skills*</label>
              <div className="col1">
                <div className="box">
                  <div className="sk1">
                    <label htmlFor="HTML">
                      <input
                        type="checkbox"
                        name="HTML"
                        value="HTML"
                        onChange={(e) => setSkills(e.target.value)}
                      />
                      HTML
                    </label>
                    <label htmlFor="CSS">
                      <input
                        type="checkbox"
                        name="CSS"
                        value="CSS"
                        onChange={(e) => setSkills(e.target.value)}
                      />
                      CSS
                    </label>
                    <label htmlFor="JS">
                      <input type="checkbox" name="JS" value="JS" />
                      JS
                    </label>
                    <label htmlFor="TailWindCSS">
                      <input
                        type="checkbox"
                        name="TailWindCSS"
                        value="TailWindCSS"
                      />
                      TailWindCSS
                    </label>
                    <label htmlFor="ReactJS">
                      <input type="checkbox" name="ReactJS" value="ReactJS" />
                      ReactJS
                    </label>
                    <label htmlFor="Flutter">
                      <input type="checkbox" name="Flutter" value="Flutter" />
                      Flutter
                    </label>
                    <label htmlFor="VueJS">
                      <input type="checkbox" name="VueJS" value="VueJS" />
                      Vue JS
                    </label>
                  </div>

                  <div className="sk1">
                    <label htmlFor="NodeJS">
                      <input type="checkbox" name="NodeJS" value="NodeJS" />
                      NodeJS
                    </label>
                    <label htmlFor="NoSQL">
                      <input type="checkbox" name="NoSQL" value="NoSQL" />
                      No-SQL
                    </label>
                    <label htmlFor="MongoDB">
                      <input type="checkbox" name="MongoDB" value="MongoDB" />
                      MongoDB
                    </label>
                    <label htmlFor="Nodemon">
                      <input type="checkbox" name="Nodemon" value="Nodemon" />
                      Nodemon
                    </label>
                    <label htmlFor="MaterialUI">
                      <input
                        type="checkbox"
                        name="MaterialUI"
                        value="MaterialUI"
                      />
                      Material UI
                    </label>
                    <label htmlFor="ExpressJS">
                      <input
                        type="checkbox"
                        name="ExpressJS"
                        value="ExpressJS"
                      />
                      Express JS
                    </label>
                  </div>

                  <div className="sk1">
                    <label htmlFor="SQL">
                      <input type="checkbox" name="SQL" value="SQL" />
                      SQL
                    </label>
                    <label htmlFor="Firebase">
                      <input type="checkbox" name="Firebase" value="Firebase" />
                      Firebase
                    </label>
                    <label htmlFor="Django">
                      <input type="checkbox" name="Django" value="Django" />
                      Django
                    </label>
                    <label htmlFor="Flask">
                      <input type="checkbox" name="Flask" value="Flask" />
                      Flask
                    </label>
                    <label htmlFor="Wordpress">
                      <input
                        type="checkbox"
                        name="Wordpress"
                        value="Wordpress"
                      />
                      Wordpress
                    </label>
                    <label htmlFor="Flutter">
                      <input type="checkbox" name="Flutter" value="Flutter" />
                      Flutter
                    </label>
                  </div>

                  <div className="sk1">
                    <label htmlFor="Java">
                      <input type="checkbox" name="Java" value="Java" />
                      Java
                    </label>
                    <label htmlFor="Python">
                      <input type="checkbox" name="Python" value="Python" />
                      Python
                    </label>
                    <label htmlFor="Postman">
                      <input type="checkbox" name="Postman" value="Postman" />
                      Postman
                    </label>
                    <label htmlFor="Wix">
                      <input type="checkbox" name="Wix" value="Wix" />
                      Wix
                    </label>
                    <label htmlFor="Figma">
                      <input type="checkbox" name="Figma" value="Figma" />
                      Figma
                    </label>
                    <label htmlFor="Spline">
                      <input type="checkbox" name="Spline" value="Spline" />
                      Spline
                    </label>
                  </div>

                  <div className="sk1">
                    <label htmlFor="Blender">
                      <input type="checkbox" name="Blender" value="Blender" />
                      Blender
                    </label>
                    <label htmlFor="AfterEffects">
                      <input
                        type="checkbox"
                        name="AfterEffects"
                        value="AfterEffects"
                      />
                      Adobe After Effects
                    </label>
                    <label htmlFor="PremierePro">
                      <input
                        type="checkbox"
                        name="PremierePro"
                        value="PremierePro"
                      />
                      Adobe Premiere Pro
                    </label>
                    <label htmlFor="Photoshop">
                      <input
                        type="checkbox"
                        name="Photoshop"
                        value="Photoshop"
                      />
                      Adobe Photoshop
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[30px] flex flex-row ml-[22px] gap-8 justify-center">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="fileip">Upload Your Resume*</label>
                <input
                  type="file"
                  required
                  id="fileip"
                  onChange={(e) => setResume(e.target.value)}
                />
              </div>

              <div className="ml-[50px] flex flex-col items-center gap-[10px]">
                <label
                  htmlFor="Agree"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="Agree"
                    value="Agree"
                    onChange={(e) => setAgree(e.target.value)}
                  />
                  I agree and continue
                </label>
                <button className="bg-[#0948cf] text-white flex items-center justify-center rounded h-[60px] w-[600px] cursor-pointer hover:bg-[#0736a0] transition-colors duration-300 font-medium ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
