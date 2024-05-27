import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [NgFor],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  studentsInitial = [
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1466112928291-0903b80a9466?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2020',
      campany: 'Google',
      position: 'Software Engineer',
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2021',
      campany: 'Facebook',
      position: 'Product Manager',
    },
    {
      name: 'Michael Johnson',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'Amazon',
      position: 'Research Scientist',
    },

    {
      name: 'Maire Laure',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'Orange',
      position: 'Release Manager',
    },
    {
      name: 'Jana Zebian',
      image:
        'https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'Microsoft',
      position: 'Software Engineer',
    },
    {
      name: 'Lilian Francis',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'Sorbonne University',
      position: 'Research Scientist',
    },
    {
      name: 'Manne Micheal',
      image:
        'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'Google',
      position: 'CEO',
    },
    {
      name: 'Antoine Doe',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'IMT Atlantique',
      position: 'Director',
    },
    {
      name: 'Aymane Doe',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      year: '2019',
      campany: 'HSBC',
      position: 'Engineering Manager',
    },
  ];

  students = this.studentsInitial.slice();

  search(event: Event) {
    let searchValue = (event.target as HTMLInputElement).value;
    console.log(searchValue);
    if (searchValue === '') {
      this.students = this.studentsInitial.slice();
      return;
    }

    this.students = this.studentsInitial.filter((student) => {
      return (
        student.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        student.campany
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        student.position
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    });

    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      modules: [Navigation],
    });
  }

  ngOnInit(): void {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
      modules: [Navigation],
    });
  }
}
