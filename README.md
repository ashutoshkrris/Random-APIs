<p align="center">
    <a href="https://ashutoshkrris.github.io/Random-APIs/">
        <img src="https://raw.githubusercontent.com/ashutoshkrris/Random-APIs/main/logo.png" >
    </a>
</p>

<div align="center">

<a href="https://github.com/ashutoshkrris/Random-APIs"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>

<a href="https://github.com/ashutoshkrris/Random-APIs"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/ashutoshkrris/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs"><img src="https://img.shields.io/github/repo-size/ashutoshkrris/Random-APIs.svg?label=Repo%20size&style=flat"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs"><img src="https://img.shields.io/tokei/lines/github/ashutoshkrris/Random-APIs?color=yellow&label=Lines%20of%20Code"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?v=103"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/watchers"><img src="https://img.shields.io/github/watchers/ashutoshkrris/Random-APIs"></a>
  
<a href="https://github.com/ashutoshkrris/Random-APIs/graphs/contributors"><img src="https://img.shields.io/github/contributors/ashutoshkrris/Random-APIs?color=brightgreen"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/stargazers"><img src="https://img.shields.io/github/stars/ashutoshkrris/Random-APIs?color=0059b3"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/network/members"><img src="https://img.shields.io/github/forks/ashutoshkrris/Random-APIs?color=yellow"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/issues"><img src="https://img.shields.io/github/issues/ashutoshkrris/Random-APIs?color=brightgreen"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/issues?q=is%3Aissue+is%3Aclosed"><img src="https://img.shields.io/github/issues-closed-raw/ashutoshkrris/Random-APIs?color=0059b3"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/pulls"><img src="https://img.shields.io/github/issues-pr/ashutoshkrris/Random-APIs?color=yellow"></a>
<a href="https://github.com/ashutoshkrris/Random-APIs/pulls?q=is%3Apr+is%3Aclosed"><img src="https://img.shields.io/github/issues-pr-closed-raw/ashutoshkrris/Random-APIs?color=brightgreen"></a> 
</div>

This repository is for anyone around the globe who wants to start their open-source journey with Hacktoberfest. All you need to do is to call any [Public APIs](https://github.com/public-apis/public-apis) and show us its response on the main page using Javascript Fetch API. It could be quotes, cat images, bitcoin - anything. Design it the way you want! Complete your Hacktoberfest challenge this year.

## Table of content
- [Hacktoberfest](#hacktoberfest)
- [Prerequisite](#prerequisite)
    - [Git and Github](#git--github)
    - [What's an API?](#whats-an-api)
    - [Using Fetch](#using-fetch)
    - [Local setup](#local-setup)
- [How to contribute?](#how-to-contribute)
- [Contributors](#contributors)

## Hacktoberfest

![Hacktoberfest](https://i.imgur.com/pZaosIp.png)

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is a global challenge organized by DigitalOcean. It encourages participation in giving back to the open-source community by completing pull requests and participating in events. You can sign up anytime between 1 and October 31. Pull requests can be submitted to this repo or any opted-in GitHub or GitLab repo. To get a T-shirt :tshirt:, you must make 4 approved pull requests (PRs). :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://hacktoberfest.digitalocean.com/resources/participation)


## Prerequisite

### Git & Github
Here, we have mentioned the instructions to set up git. If you don't already know what Git is, check out this blog series on [iRead](https://iread.ga/series/1/git-and-github).

- Login / Sign-up to [Github](https://github.com/login).
- Download and install [Git](https://git-scm.com/downloads).
- Configure git
    - Launch terminal or command promt.
    - Run the commands.
        - `git config --global user.name "Your name"`
        - `git config --global user.email "Your email address"` 
 - Optionally, you can [setup ssh keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) to authenticate easily. 

### What's an API?
API stands for Application Programming Interface. Imagine what happens at a restaurant :fork_and_knife: - You order your favorite food :pizza: ( Request ), the waiter serves your order when it's ready (API Response). You are not aware of how the food is prepared. Similarly, you request data from an API, and the API returns it to you. You need not be aware of what's happening behind the scenes. Now, anybody who knows where the restaurant is, and how to communicate with the waiter can place an order. Similarly, anyone can consume an API even computer programs :robot:. 

Whenever you visit [Random APIs](https://ashutoshkrris.github.io/Random-APIs/) you would see a new quote, I could have manually created a list of 1000 quotes and picked up anyone at random but instead, I can just consume [`Advice Slip`](https://api.adviceslip.com/) API which saves me all the trouble of manually creating the list and offers way more quotes that I could have added. 

There are amazing people out there, who have created a large number of awesome APIs - random Cat pictures :cat2: , random dogs pictures :dog:, breaking bad quotes, harry potter quotes, bitcoin prices :moneybag: , NASA space images, etc. You can find all of these and many more at [Public APIs repository](https://github.com/public-apis/public-apis).

For this project, you need to pick up any API you like from this list, read about how you can use it, try calling it and understanding its response, and then consuming it your react components. We are extremely excited to see what API you choose and what you make with it! :tada:

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)


### Using Fetch

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

[![Learn more](https://img.shields.io/badge/-Learn%20more-orange?style=plastic)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Local setup
- Go to the top of this page and click on the "Fork" button. 

![Fork](https://i.imgur.com/IyoLUXV.png)

This would make a copy of this repository in your account. You will see `<your_username>/Random-APIs`.


- Clone the repository 
    - Click on the "Code" button and copy the URL.
    - On your local machine, run terminal / cmd and type `git clone <copied_url>`. This creates a new folder named "Random-APIs".
    - Go to the folder.

## How to contribute?

### Preparation
- Make sure that the main branch of your fork is even with this repo. 

- Otherwise, click on the "Fetch and merge" button and go to the project folder on your computer and run `git pull` to update the changes in your local repo.

- Launch a terminal and run the commands
    - `git branch <your_branch_name>` - This creates a new branch. The branch name should be similar to the API name. 
    - `git checkout <your_branch_name>` - Checkout to your branch. This helps you work in parallel but without disturbing files on the main branch.
 
 ### Working on your contribution
- Go to the [Public APIs repository](https://github.com/public-apis/public-apis).
- Browse through the list and pick any.
- The chosen API should have HTTPS enabled.
- Think of some creative use-case of this API, something you would like everybody to see.
- Now, Open VS code or any text editor.
- Go to `main.js` file.
- Create a new fetch api call as:
```
fetch("https://api.adviceslip.com/advice", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    let response = `
        <div class="col-lg-12 mb-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Random Advice API</h4>
                <h5 class="card-text mt-4">
                  ${data.slip.advice}
                </h5>
                <br />
                <a href="https://github.com/ashutoshkrris" class="username"
                  ><img
                    src="https://avatars.githubusercontent.com/u/47353498?v=4"
                    alt="DP"
                    class="rounded-circle img-fluid mr-2"
                    width="40"
                    height="40"
                  />ashutoshkrris</a
                >
                &nbsp;
                <a
                  href="https://api.adviceslip.com/"
                  class="btn btn-outline-dark btn-sm"
                  ><i class="fa fa-link" aria-hidden="true"></i> Advice Slip</a
                >
              </div>
            </div>
          </div>
        `;
    responsesBody.innerHTML += response;
  });
```
- Make sure you make these required changes:
    - Replace the **title** with the title of your API
    ![Change Title](https://i.imgur.com/k6AoOtO.png)

    - Replace the **response text**
    ![Change Response](https://i.imgur.com/CwWzQBc.png)

    - Replace **Github Profile URL**, **Image Source** and **Github Username** with that yours
    ![User Replacements](https://i.imgur.com/CTNECGS.png)

    - Finally, replace the **API Documentation URL** and **API Name**
    - ![API Replacements](https://i.imgur.com/L2yjliH.png)

- Go through the documentation of your API. It would contain instructions on its usage. Use those instructions to create a fetch request. Take help from randomQuotes component. This step would be different for all of us. Don't worry, API documentation and code in other components would give you enough clues. Consume the API and display its response in your component.
- Please do not add any API which requires API Key to access it.
- Great, if you have done the above part Congratulations! :tada:
- Run the project to verify your code works as expected.

### Submitting your work
- Open a terminal and run these commands
    - `git add .` - stage your changes.
    - `git commit -m <your commit message>` - commit changes
    - `git checkout main` - checkout back to the main branch
    - `git push --all` - push all changes to Github.
- Go to your fork, you would see a pop-up asking you to make a PR. Click on it.
- Write a small description and complete the checklist. Click on "Make a PR".

Wait for it to get approved and merged. Awesome, you have made your first contribution. To make a further contribution, you need to create new branches. Your next contributions could be improvements to previous work or a new API call. 

### Contributors

<a href="https://github.com/ashutoshkrris/Random-APIs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ashutoshkrris/Random-APIs" />
</a>