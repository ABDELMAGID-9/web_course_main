# SWE 363 - 251 In-Lab Participation

## Overview
Hands-on coding demonstrations and collaborative exercises during class time. 20 demos throughout the semester, each worth 0.5% of final grade.


## Requirements

- **Timing**: Complete during class time only (no late submissions)
- **Format**: Live coding with instructor and peers observing
- **Mandatory**: Class attendance, active engagement


## Technical Requirements

- Code editor (Cursor, VS Code, Sublime Text, etc.)
- Web browser with developer tools
- Git (latest version)
- Node.js for JavaScript development
- Terminal/Command Prompt access

## GitHub Classroom Instructions

### What is GitHub Classroom?
GitHub Classroom is a tool that automatically creates individual repositories for each student when they accept an assignment. This eliminates the need for manual forking and simplifies the submission process.

### Initial Setup (One-time)
1. **Accept the assignment** by clicking the GitHub Classroom link provided by your instructor
2. **Authorize GitHub Classroom** to access your GitHub account
3. **Your individual repository** will be automatically created and ready for use

### Before Each Lab Session
1. **Clone your assignment repository** (if not already done):
   ```bash
   git clone https://github.com/Web-Engineering-KFUPM/[ASSIGNMENT-NAME]-[YOUR-USERNAME].git
   cd [ASSIGNMENT-NAME]-[YOUR-USERNAME]
   ```
2. **Pull any updates** from the remote repository:
   ```bash
   git pull origin main
   ```

## How to Submit Your Work

### During Lab Sessions
1. **Complete the assigned tasks** in your local repository
2. **Add and commit your changes** with descriptive messages:
   ```bash
   git add .
   git commit -m "Complete lab exercise: [brief description]"
   ```
3. **Push your changes** to your assignment repository:
   ```bash
   git push origin main
   ```

### Submission Requirements
- **Timing**: Must be pushed during class time
- **Content**: Include all required files and changes
- **Quality**: Code should be functional and well-formatted
- **Documentation**: Add comments where appropriate
- **Commit Messages**: Use descriptive, professional language

### Optional: GitHub Setup Assignment
Students who are new to Git and GitHub can complete an optional setup assignment to familiarize themselves with:
- Basic Git commands (add, commit, push, pull)
- GitHub repository navigation
- Creating and managing branches
- Resolving merge conflicts

This assignment is **not graded** but highly recommended for students with limited Git experience.



## Support Resources

- Instructor office hours
- Teaching assistants during lab sessions
- Online documentation and tutorials
- Peer collaboration during lab time
- [GitHub Starter Course](https://github.com/Web-Engineering-KFUPM/github-starter-course) - Learn the basics of Git and GitHub

## Getting the most out of it

- Review course materials and slides
- Arrive on time with necessary materials
- Ask questions when needed

## Conclusion
Active participation in lab sessions is crucial for mastering web development. Approach each session with enthusiasm and curiosity. The skills developed here will serve as the foundation for your future web development endeavors.


---

## GitHub Classroom Troubleshooting (Quick Guide)

1) Verify correct GitHub account
- Use the GitHub account registered with your KFUPM email (the one linked in Classroom).
- If unsure, ask your instructor which email is registered.

2) Clear browser authentication
- Sign out of all GitHub accounts in your browser.
- Clear cache, cookies, and saved logins.
- Log in again with your KFUPM-registered account.
- If still blocked, try Incognito/Private Mode or a different browser.

3) Access the lab link
- Open the provided GitHub Classroom link.
- If successful, create a fork of the repository and copy the fork URL.

4) Clone your fork
```bash
git clone <fork_link>
```

5) Make changes and prepare commit
```bash
git status
git add .
git commit -m "Your commit message"
```

6) Fix push/commit issues
- If `git push` fails, set your Git identity (must match a registered GitHub email):
```bash
git config --global user.name "Your GitHub Name"
git config --global user.email "your_kfupm_email@example.com"
```

7) Push changes
```bash
git push origin main
```

8) If problems persist
- Confirm you’re using the GitHub account tied to Classroom.
- Re-authenticate GitHub on your computer (log out/in, reset credentials).
- Ask the instructor/TA to confirm your account mapping in GitHub Classroom.