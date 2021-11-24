import React from 'react';
import TeamMember from './teammemer';

const Team = () => {
    return(
        <section id="team" className="team section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Team</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
  
          <div className="row">
  
            <TeamMember pic="assets/img/team/team-1.jpg" name="Walter White" designation="Chief Executive Officer" />
            <TeamMember pic="assets/img/team/team-2.jpg" name="Sarah Jhonson" designation="Product Manager" />
            <TeamMember pic="assets/img/team/team-3.jpg" name="William Anderson" designation="CTO" />
            <TeamMember pic="assets/img/team/team-4.jpg" name="Amanda Jepson" designation="Accountant" />
            
          </div>
  
        </div>
      </section>
    );
}

export default Team;