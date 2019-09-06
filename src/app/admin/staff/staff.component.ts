import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {FormBuilder, Validators} from '@angular/forms';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from 'rxjs';
import {NotifierService} from 'angular-notifier';
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Title} from '@angular/platform-browser';
import {HttpService} from '../../providers/http.service';


interface UserPermissions {
  addStaff: boolean;
  updateStaff: boolean;
  deleteStaff: boolean;
  addMusic: boolean;
  updateMusic: boolean;
  deleteMusic: boolean;
  addMovies: boolean;
  updateMovies: boolean;
  deleteMovies: boolean;
}

interface Staff {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string | number;
  permissions: UserPermissions;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ts-ignore
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  // @ts-ignore
  dtTrigger: Subject = new Subject();
  // form builder
  staffForm = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
    phone: [null],
    confirmPassword: [null],
    email: [null, Validators.email]
  });
  // icons
  editIcon = faPencilAlt;
  deleteIcon = faTrash;
  // permissions
  staffPermissions: UserPermissions;
  CREATE_MODE: boolean;
  // staff array
  staffMembers: Staff[] = [];
  ALL_PERM_CHECK: boolean;
  private editStaffIndex: number;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private notifier: NotifierService,
    private ref: ChangeDetectorRef,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Staff - ATALAKU (Admin)');
    this.CREATE_MODE = true;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.staffPermissions = {
      addStaff: false,
      updateStaff: false,
      deleteStaff: false,
      addMusic: false,
      updateMusic: false,
      deleteMusic: false,
      addMovies: false,
      updateMovies: false,
      deleteMovies: false
    };
    // staff members
    // this.staffMembers = [
    //   {username: 'Hubert', email: 'hformin@gmail.com', phone: '681376338'},
    //   {username: 'Ramsey', email: 'ramsey@gmail.com', phone: '677376338'},
    //   {username: 'Thomas', email: 'thomas@gmail.com', phone: '692376338'},
    //   {username: 'Andrew', email: 'andrew@gmail.com', phone: '681786338'},
    //   {username: 'John', email: 'johnmcclain@gmail.com', phone: '691376338'},
    // ];
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.httpService.getAdmins()
      .subscribe((data: Staff[]) => {
        this.staffMembers = data;
        console.log(data);
        this.renderer();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  renderer(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // call the dtTrigger to rerender
      this.dtTrigger.next();
    });
  }

  get username() {
    return this.staffForm.get('username');
  }
  get password() {
    return this.staffForm.get('password');
  }
  get confirmPassword() {
    return this.staffForm.get('confirmPassword');
  }
  get email() {
    return this.staffForm.get('email');
  }
  get phone() {
    return this.staffForm.get('phone');
  }

  setAllPermissions() {
    this.staffPermissions = {
      addStaff: !this.staffPermissions.addStaff,
      updateStaff: !this.staffPermissions.updateStaff,
      deleteStaff: !this.staffPermissions.deleteStaff,
      addMusic: !this.staffPermissions.addMusic,
      updateMusic: !this.staffPermissions.updateMusic,
      deleteMusic: !this.staffPermissions.deleteMusic,
      addMovies: !this.staffPermissions.addMusic,
      updateMovies: !this.staffPermissions.updateMovies,
      deleteMovies: !this.staffPermissions.deleteMovies,
    };
  }

  toggleModal() {
    $('#userForm').toggleClass('display');
  }
  // toggle create mode
  toggleCreateMode() {
    this.staffForm.reset();
    this.CREATE_MODE = true;
    this.staffPermissions = {
      addStaff: false,
      updateStaff: false,
      deleteStaff: false,
      addMusic: false,
      updateMusic: false,
      deleteMusic: false,
      addMovies: false,
      updateMovies: false,
      deleteMovies: false
    };
    this.ALL_PERM_CHECK = false;
    this.toggleModal();
  }

  toggleEditMode(index: number) {
   const user = this.staffMembers[index];
   this.editStaffIndex = index;
   this.CREATE_MODE = false;
   this.staffForm.patchValue({username: user.username, email: user.email, phone: user.phone});
    try {
      // @ts-ignore
      this.staffPermissions = JSON.parse(user.permissions);
    } catch (e) {
      this.staffPermissions = user.permissions;
    }
   this.toggleModal();
  }

  addEditStaff(e) {
    e.preventDefault();
    // basic validation
    if (this.CREATE_MODE && !this.staffForm.valid) {
      this.notifier.notify('error', 'Please validate form');
      return;
    }
    if (this.CREATE_MODE) {
      if (this.password.value !== this.confirmPassword.value) {
        this.notifier.notify('error', 'Passwords do not match.');
        return;
      }
      // console.log(this.staffMembers);
      // this.ref.detectChanges();
      // this.renderer();
      // add admin to database
      this.httpService.createAdmin({
        username: this.username.value,
        email: this.email.value,
        password: this.password.value,
        phone: this.phone.value,
        permissions: JSON.stringify(this.staffPermissions)
      }).subscribe((data: Staff) => {
        this.staffMembers.unshift(data);
        this.renderer();
        //
        this.toggleModal();   // close modal
        this.staffForm.reset(); // reset form
        this.notifier.notify('success', 'Account created!');
      }, (err) => {
        console.error(err);
      });
    } else {
      // update mode
      if ((this.password.value || this.password.value === '') && this.password.value === this.confirmPassword.value) {
        this.notifier.notify('error', 'Passwords do not match.');
        return;
      }
      // update database
      this.httpService.updateAdmin({
        id: this.staffMembers[this.editStaffIndex].id,
        username: this.username.value,
        email: this.email.value,
        password: (this.password.value || this.password.value === '') ? this.password.value : this.staffMembers[this.editStaffIndex].password,
        phone: this.phone.value,
        permissions: JSON.stringify(this.staffPermissions)
      }).subscribe((data) => {
        this.staffMembers[this.editStaffIndex] = {
          id: this.staffMembers[this.editStaffIndex].id,
          username: this.username.value,
          email: this.email.value,
          password: (this.password.value || this.password.value === '') ? this.password.value : this.staffMembers[this.editStaffIndex].password,
          phone: this.phone.value,
          permissions: this.staffPermissions
        };
        this.renderer();
        //
        this.toggleModal();   // close modal
        this.staffForm.reset(); // reset form
        this.notifier.notify('success', 'User updated!');
      }, (err) => {
        console.error(err);
      });
    }
  }

  deleteStaff(index: number) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.httpService.deleteStaff(this.staffMembers[index].id)
        .subscribe((data) => {
          console.log(data);
        });
      this.staffMembers.splice(index, 1);
      this.renderer();
    }
  }

}
