---
layout: ../layouts/AboutLayout.astro
title: "Student Data"
---

<style>
  .student-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }

  .student-card {
  width: calc(25% - 20px);
  min-width: 232px;
  border: 1px solid #ccc;
  padding: 10px 12px;  /* Reduced padding */
  border-radius: 8px;
  text-align: left;
  box-sizing: border-box;
  background-color: #111827;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

  .student-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    display: block;
  }

  @media (max-width: 900px) {
    .student-card {
      width: calc(50% - 20px);
    }
    .student-card img {
      height: 160px;
    }
  }

  @media (max-width: 600px) {
    .student-card {
      width: 100%;
    }
    .student-card img {
      height: 215px;
    }
  }

.student-card p {
  margin: 6px 0;
  line-height: 1.4;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
}

.student-card span.label {
  font-weight: 600;
  color: #38bdf8;
  margin-right: 8px;   /* SMALL gap */
  min-width: auto;     /* Allow shrinking if needed */
  flex-shrink: 0;      /* Prevent label from shrinking */
}
</style>


<div class="student-container">

  <!-- Student 1 -->
  <div class="student-card">
  <img src="/assets/student/zahir.jpeg" alt="Student 1">
  <p><span class="label">Name:</span>Zahir Ahmed khan</p>
  <p><span class="label">Uni:</span> Uni Wien</p>
  <p><span class="label">Dep:</span> Applied Economics</p>
  <p><span class="label">Degree:</span> Master's</p>
  <p><span class="label">Phone:</span> WS Group</p>
</div>
  
  
  <div class="student-card">
  <img src="/assets/student/aziz.jpeg" alt="Student 1">
  <p><span class="label">Name:</span>Aziz</p>
  <p><span class="label">Uni:</span> Uni Wien</p>
  <p><span class="label">Dep:</span> CSE</p>
  <p><span class="label">Degree:</span> Master's</p>
  <p><span class="label">Phone:</span> WS Group</p>
</div>
  
  <div class="student-card">
  <img src="/assets/student/mehedi.jpeg" alt="Student 1">
  <p><span class="label">Name:</span>Mehedi Shuvo</p>
  <p><span class="label">Uni:</span> Uni Wien</p>
  <p><span class="label">Dep:</span> CSE</p>
  <p><span class="label">Degree:</span> Master's</p>
  <p><span class="label">Phone:</span> WS Group</p>
</div>
  
  
  <div class="student-card">
  <img src="/assets/student/kazi.jpeg" alt="Student 1">
  <p><span class="label">Name:</span>Kazi Sawon</p>
  <p><span class="label">Uni:</span> Uni Wien</p>
  <p><span class="label">Dep:</span> CSE</p>
  <p><span class="label">Degree:</span> Master's</p>
  <p><span class="label">Phone:</span> WS Group</p>
</div>

<div class="student-card">
  <img src="/assets/student/rafi.jpeg" alt="Student 1">
  <p><span class="label">Name:</span>Rafi</p>
  <p><span class="label">Uni:</span> Uni Wien</p>
  <p><span class="label">Dep:</span> Applied Economics</p>
  <p><span class="label">Degree:</span> Master's</p>
  <p><span class="label">Phone:</span> WS Group</p>
</div>

</div>
