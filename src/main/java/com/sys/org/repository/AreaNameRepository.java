package com.sys.org.repository;

import com.sys.org.domain.AreaName;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the AreaName entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AreaNameRepository extends JpaRepository<AreaName,Long> {
    
}
